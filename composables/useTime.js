export const useTime = (date) => {
    let minutes = ''
    minutes = minutes +new Date(date).getMinutes()
    if(minutes.length == 1){
        minutes = '0' + minutes
    } 
    let hour = ''
    hour = hour +new Date(date).getHours()
    if(hour.length == 1){
        hour = '0' + hour
    } 
        return  minutes + ' : ' + hour
  
    
  }