// import axois from 'axios'

export default ({
    namespaced: true, // !!!!一定要加
    state: {
        nowShowPage: 0, // 現在顯示的頁面
        pageList:[], // 所有頁面名稱
        insurePage:"", // 要保人所在頁面(被塞值)
        beinsurePage:"", // 被保人所在頁面(塞值)
        insureList:[], // 要保人所有欄位id(被塞值)
        beinsureList:[], // 被保人所有欄位id(塞值)
        insureList_all:['petT1','petT2'], // 要保人所有欄位id(被塞值)...所有
        beinsureList_all:['t1','t2'], // 被保人所有欄位id(塞值)...所有
        pageFieldState:{
            'pageA':{
              't1':{
                    'title': '姓名',
                    'type':'textPart',
                    'val': '',
                    'id':'t1',
                    'isErr':false,
                    'errMsg':'此欄位為必填',
                    'rule':['A01','A02'],
                    'display':true ,
                    'disable':true
                },
              't2':{
                  'title': 'email',
                  'type':'textPart2',
                  'val': '',
                  'id':'t2',
                  'isErr':false,
                  'errMsg':'此欄位為必填',
                  'rule':['A01'],
                  'display':true ,
                  'disable':true
              },
            },
            'pageB':{
               'petT1': {
                    'title': '寵物姓名',
                    'type':'textPart',
                    'val': '',
                    'id':'petT1',
                    'isErr':false,
                    'errMsg':'此欄位為必填',
                    'rule':['A01'],
                    'display':true ,
                    'disable':true ,
                    'getData': 't1'  // 要塞入誰的值
                },
                'petT2': {
                  'title': '寵物姓名EMAIL',
                  'type':'textPart',
                  'val': '',
                  'id':'petT2',
                  'isErr':false,
                  'errMsg':'此欄位為必填',
                  'rule':['A01'],
                  'display':true ,
                  'disable':true ,
                  'getData': 't2'  // 要塞入誰的值
                },
                'sameTest':{
                  'title': '寵物姓名是否要跟姓名相同',
                  'type':'SwitchItem',
                  'val': false,
                  'id':'sameTest',
                  'isErr':false,
                  'errMsg':'此欄位為必填',
                  'rule':['A01'],
                  'display':true ,
                  'disable':true
              },

            },
            '測試用':{
                    'text1':{
                      'title': '單行輸入框',
                      'type':'TextItem',
                      'val': '',
                      'id':'text1',
                      'isErr':false,
                      'errMsg':'此欄位為必填',
                      'rule':['A01'],
                      'display':true ,
                      'disable':true
                  },
                    'select':{
                      'title': '下拉選單',
                      'type':'SelectItem',
                      'val': '',
                      'id':'select',
                      'isErr':false,
                      'errMsg':'此欄位為必填',
                      'rule':['A01'],
                      'display':true ,
                      'disable':true,
                      'options': [{
                        value: '选项1',
                        label: '黄金糕'
                      }, {
                        value: '选项2',
                        label: '双皮奶'
                      }, {
                        value: '选项3',
                        label: '蚵仔煎'
                      }, {
                        value: '选项4',
                        label: '龙须面'
                      }, {
                        value: '选项5',
                        label: '北京烤鸭'
                      }],
                  },
                    'switch':{
                      'title': 'Switch開關',
                      'type':'SwitchItem',
                      'val': true,
                      'id':'switch',
                      'isErr':false,
                      'errMsg':'此欄位為必填',
                      'rule':['A01'],
                      'display':true ,
                      'disable':true
                  },
                  

            }
        }
    },
    mutations: {
        INIT(state , payload){ // 一開始塞值(塞入API值 + 塞入首頁值)
          state.pageList = payload['pageList'];
          state.insurePage = payload['insurePage'] ;
          state.beinsurePage = payload['beinsurePage'] ;
          state.insureList = payload['insureList'] ;
          state.beinsureList = payload['beinsureList'] ;
        },
        CHANGEVAL(state , payload){ // 檢核改狀態
            // console.log('檢核改狀態')
            // console.log(state.pageFieldState['pageA'])
            state.pageFieldState=payload ;
            // state.myTest = payload ;
  
          },
        CHANGEPAGE(state , payload){
          state.nowShowPage = payload ;
        }
    },
    actions: {
        // 一開始塞值(塞入API值 + 塞入首頁值)
        init(context , payload){
          var allData = this.state.dynamicFormModule.pageFieldState ;
          var beInsure_all = this.state.dynamicFormModule.beinsureList_all ; // 被保人(塞值) ... all
          var insure_all = this.state.dynamicFormModule.insureList_all ; // 要保人(被塞值) ... all

          var beInsure = [] ; // 被保人(塞值)
          var insure = []; // 要保人(被塞值)

          var beInsurePage = ''; // 被保人 哪一頁
          var insurePage = ''; // 要保人 哪一頁


          // 取得被保人 與要保人頁數 
          for(var i in allData){
            var onePageData = allData[i];
            for(var j in onePageData){

              if(beInsure_all.indexOf(j) != -1){ // 找到 被保人 的頁數
                beInsurePage = i
                beInsure.push(j); // 將本案子有的所有 beInsure 抓出來
              }

              if(insure_all.indexOf(j) != -1){ // 找到 要保人 的頁數
                insurePage = i
                insure.push(j) // 將本案子有的所有 insure 抓出來
              }

            }
          }


          var passData = {
            'pageList':payload,
            'insurePage':insurePage,
            'beinsurePage':beInsurePage,
            'insureList':insure,
            'beinsureList':beInsure 
          }

          context.commit('INIT',passData)

        },
        changeVal(context , payload) {
            var nowData = payload['data']
            var nowPage = payload['page']
            var allData = this.state.dynamicFormModule.pageFieldState ;


            // 要保人同被保人 按鈕切換時帶值
            if(nowData.id == 'sameTest'){
              context.dispatch('sameDataBringIn',{allData,nowData}).then(res=>{
                allData = res ;
              })
            }

            nowData.isErr = true ;

            // 以下為規則判斷
            context.dispatch('checkRule',{allData ,nowData ,nowPage }).then(res=>{
                context.commit('CHANGEVAL',res) // 在更新狀態...錯誤訊息之類的??
            }) ;
  
            
        },
        // 檢核規則
        checkRule(context ,{allData ,nowData ,nowPage } ){
            var fieldName = nowData.id;
            var pageFieldState = allData ;
            
            nowData.rule.forEach((element,index) => {
                if(index == 0){
                    this.state.dynamicFormModule.pageFieldState[nowPage][fieldName]['isErr'] = false ; // 先把錯誤取消
                }


                switch (element) {
                    case 'A01': // 規則1 必填
                    
                      if(pageFieldState[nowPage][fieldName]['display'] == true && pageFieldState[nowPage][fieldName]['val'] ==''){
                        pageFieldState[nowPage][fieldName]['isErr'] = true
                        pageFieldState[nowPage][fieldName]['errMsg'] = '此欄位為必填'
                      }

                     
                      
                      break;
                    case 'A02': // 規則2 不可大於10個字
      
                      if(nowData.val.length>10){
                        pageFieldState[nowPage][fieldName]['isErr'] = true
                        pageFieldState[nowPage][fieldName]['errMsg'] = '字數不可超過10'
                      }

                     
        
                      break;
                    default:
                  }
                
                  return false;
            });

            return pageFieldState ;
  
        },
        // 要保人同被保人 按鈕切換 互相帶值
        sameDataBringIn(context,{allData ,nowData}){
          var insurePage = this.state.dynamicFormModule.insurePage ; //要保人所在頁面(被塞值)
          var beinsurePage = this.state.dynamicFormModule.beinsurePage ; //被保人所在頁面(塞值)
          var insureList = this.state.dynamicFormModule.insureList ;// 要保人所有欄位id(被塞值)

          // 該欄位在哪一頁 方法
          if(nowData.val){ // 要保人 塞 被保人 的值 / 不可編輯
            for(var x = 0 ;x<insureList.length ; x++){
              var editField = allData[insurePage][insureList[x]];
              allData[insurePage][insureList[x]].val = allData[beinsurePage][editField['getData']].val ;
              allData[insurePage][insureList[x]].disable = false ;
            }
          }else{ // 要保人 回復為空 / 可編輯
            for(var x = 0 ;x<insureList.length ; x++){
              var editField = allData[insurePage][insureList[x]];
              allData[insurePage][insureList[x]].val = '' ;
              allData[insurePage][insureList[x]].disable = true ;
            }
          }
          return allData ;
        },
        // 切換頁面 (檢核該頁面所有資訊)
        switchPage(context ,nextPage){
          var checkPage = this.state.dynamicFormModule.nowShowPage;
          var checkPageData = this.state.dynamicFormModule.pageFieldState[checkPage]; // 要檢核的所有欄位
          var allData = this.state.dynamicFormModule.pageFieldState ; // 所有欄位值

          // 切頁檢核(切出檢核)
          for(var i in checkPageData){
            var nowData = checkPageData[i];
            var nowPage = checkPage ;

            context.dispatch('checkRule',{allData ,nowData ,nowPage }).then(res=>{
              allData = res ;
            }) ;
          }

          // 切出被保人||切入要保人 - 將被保人的值塞入要保人的值裡面
          if(checkPage==this.state.dynamicFormModule.beinsurePage || nextPage == this.state.dynamicFormModule.insurePage){
            var nowData = allData[this.state.dynamicFormModule.insurePage]['sameTest'];
            context.dispatch('sameDataBringIn',{allData,nowData}).then(res=>{
              allData = res ;
            })
          }

          // 切頁檢核(切入檢核)...不知道會不會用到??

          context.commit('CHANGEVAL',allData) //  檢核完的值
          context.commit('CHANGEPAGE',nextPage) // 更改頁數
          
        }
    },

  })