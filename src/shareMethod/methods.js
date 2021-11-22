// 共用方法 - 測試
export function testMethod () {

  
    /**
     * 西元年轉民國年
     */
    const Date_ADtoChina = (val) => {
        var data = val.split('-')
        var y = parseInt(data[0] - 1911);
        var newDate = `${y}/${data[1]}/${data[2]}` ; 
      return newDate
    }
  
    /**
     * 民國年轉西元年
     */
    const Date_ChinatoAD= () => {
      return 'date2'
    }
  
  
    return {
      Date_ADtoChina, // 西元年轉民國年
      Date_ChinatoAD, // 民國年轉西元年

    }
  }