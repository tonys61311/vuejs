// 登入後取得的使用者資料
import axois from 'axios'
import router from "../router/index.js" // 要在vuex裡切換路由一定要加!!!!!
import {initDB} from '../util/database.js'
import { openDB, deleteDB, wrap, unwrap , idb } from 'idb';

export default ({
    namespaced: true, // !!!!一定要加
    state: {
        userData:{},
    },
    mutations: {
        LOGIN(state , payload){ // 登入後 塞資料
            state.userData=payload ;
        }

    },
    actions: {
        async login(context , {userReq ,isSuccess}){
            context.commit('LOADSTATE',true, {root: true})
            context.commit('LOGIN',userReq)

            // 取得測試資料
            async function getData (){
                var data = await axois.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json")
                                    .then((res) => {
                                        console.log(res)
                                        return res ;
                                    })
                                    .catch((err) => {
                                        console.error(err)
                                        return err ;
                                    });

                return data ;
            }

            // 大量資料的存取時使用transaction確保完整性
            async function storeData(data, db) {
                const tx = db.transaction("geo", "readwrite"); // 參數的部分單純取資料可用`readonly`

                const asyncList = (data) =>
                data.map((item) => {
                    return tx.store.add(item);
                });
            
                await Promise.all([...asyncList(data), tx.done]); // 最後一步 call done method 來結束這次的transaction
            }

            // 測試db
            const { dbPromise, idbGeo } = await initDB();
            
            let keys = await idbGeo.keys(); // 取出key值來確認 db 是否有cache資料了

            if (!keys.length) { // 無資料的情況下才進行以下動作 
                const jsonData = await getData(); // api 取資料回來
                console.log(jsonData.data.features)
                await storeData(jsonData.data.features, dbPromise); // 存進indexedDB
                keys = await idbGeo.keys();
              }


            var test = await idbGeo.keys();

            const promiseDB = new Promise((resolve, reject) => {
                const indexDb_data_all = new Map();
                for(let i = 0 ; i<test.length ; i++){ //test.length
                    idbGeo.get(test[i]).then((resolve, reject)=>{
                        indexDb_data_all.set(i,resolve)
                    })
                }
                resolve(indexDb_data_all)
            });

            promiseDB.then((res)=>{
                console.log('在這裡取得所indexDB的值');
                context.commit('DBDATAGET',res, {root: true})
                context.commit('LOADSTATE',false, {root: true})
                loginNextstep();
            })

            // indexDb存入 - 教學參考 https://www.yasssssblog.com/2020/08/19/web-indexeddb/


            function loginNextstep(){
                 // 登入狀態可能需要改存 cookie 或 localStorage ... 暫時註解
                if(isSuccess){ 
                    context.commit('LOGINSTATE',true, {root: true}) // 更新登入狀態 有登入
                    router.push('/dynamicform') // 成功後跳轉route
                }else{ 
                    context.commit('LOGINSTATE',false, {root: true}) // 更新登入狀態 無登入
                }
            }


            


        }
    },

  })