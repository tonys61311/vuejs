// import axois from 'axios'

export default ({
    state: {
        pageFieldState:{
            'pageA':[
                {
                    'title': '姓名',
                    'type':'textPart',
                    'val': '',
                    'id':'t1',
                    'isErr':false,
                    'errMsg':'此欄位為必填',
                    'rule':['A01','A02'],
                    'display':true ,
                },
                {
                  'title': 'email',
                  'type':'textPart',
                  'val': '',
                  'id':'t2',
                  'isErr':false,
                  'errMsg':'此欄位為必填',
                  'rule':['A01'],
                  'display':true ,
              },
            ],
            'pageB':[
                {
                    'title': '寵物姓名',
                    'type':'textPart',
                    'val': '',
                    'id':'petT1',
                    'isErr':false,
                    'errMsg':'此欄位為必填',
                    'rule':['A01'],
                    'display':true ,
                },
            ],
        }
    },
    mutations: {
    },
    actions: {
    },

  })