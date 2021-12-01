import Toast from "react-native-toast-message" ; 

export const showToast = (message:string):void => {
    Toast.show({
        type: 'error',
        text1: '❌  Error',
        text2:  message,
        position: "bottom"
    })
}

export function formatDate(date:string|undefined):string|undefined {
    if(date){
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day , month , year].join('/');
    }
}