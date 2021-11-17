// import axois from 'axios'

export default ({
    namespaced: true, // !!!!一定要加
    state: {
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
                },
            },
        }
    },
    mutations: {
        CHANGEVAL(state , payload){ // 檢核改狀態
            // console.log('檢核改狀態')
            // console.log(state.pageFieldState['pageA'])
            state.pageFieldState=payload ;
            // state.myTest = payload ;
  
          }
    },
    actions: {
        changeVal(context , payload) {
            var nowData = payload['data']
            var nowPage = payload['page']
            var allData = this.state.dynamicFormModule.pageFieldState ;

            nowData.isErr = true ;

            context.dispatch('checkRule',{allData ,nowData ,nowPage }).then(res=>{
                // console.log('檢核規則之後');
                // console.log(res['pageA'])
                context.commit('CHANGEVAL',res) // 在更新狀態...錯誤訊息之類的??
            }) ;
  
            
        },
          // 檢核規則
        checkRule(context ,{allData ,nowData ,nowPage } ){
            var fieldName = nowData.id;
            var pageFieldState = allData ;

            // console.log(this.state.dynamicFormModule)
            // console.log(this.state.dynamicFormModule.pageFieldState[nowPage])
            // console.log(this.state.dynamicFormModule.pageFieldState[nowPage][fieldName])

            
            nowData.rule.forEach(element => {
                this.state.dynamicFormModule.pageFieldState[nowPage][fieldName]['isErr'] = false ; // 先把錯誤取消

                switch (element) {
                    case 'A01': // 規則1 必填
                    
                      if(pageFieldState[nowPage][fieldName]['display'] == true && pageFieldState[nowPage][fieldName]['val'] ==''){
                        console.log('前')
                        console.log(pageFieldState[nowPage][fieldName]['isErr'])
                        pageFieldState[nowPage][fieldName]['isErr'] = true
                        console.log('後')
                        console.log(pageFieldState[nowPage][fieldName]['isErr'])
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
                
            });
            console.log('送出前')
            console.log(pageFieldState)
            return pageFieldState ;
  
        }
    },

  })