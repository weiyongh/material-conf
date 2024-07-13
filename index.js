export const STYLE_EAST = "east"
export const STYLE_WEST = "west" //东西方刚好反转，东方喜欢留白，primary不作为主色使用
export const OS_ANDROID = "android"
export const OS_IOS = "ios"

const placeholderColor = "rgba(0, 0, 0, 0.6)"
const disabledColor = "#9e9e9e"

export const Color = {
    primary: "primary",
    secondary: "secondary",
    surface: "surface",
    background: "background",
    error: "error",
    onPrimary: "onPrimary",
    onSecondary: "onSecondary",
    onSurface: "onSurface",
    onBackground: "onBackground",
    onError: "onError",
    liubai: "liubai",
    onLiubai: "onLiubai",
    accent: "accent",
    disabled: "disabled"
}

// const dftTheme = {
//     type: "light",
//     primary: "cust-green2",
//     secondary: "cust-green-scd", //这是强调色,留白反衬色
//     surface: "light-green-200",
//     background: "cust-gray",
//     error: "red-300",
//     onPrimary: "text-grey-800",
//     onSecondary:"text-white",
//     onSurface: "text-grey-800",
//     onBackground: "text-grey-800",
//     onError: "text-white",
//     liubai: "cust-green", /* =primary */
//     onLiubai: "text-grey-800",
//     accent: "cust-green-scd",
//     disabled: "text-grey",
//     colors: {
//         primary:["","#fff"],
//         liubai:["", "#70c50e"],
//         onPrimary:["","#424242"],
//         onSecondary:["", "#fff"],
//         onSurface:["", "#424242"],
//         onBackground:["", "#424242"],
//         onError:["", "#fff"],
//         onLiubai: ["", "#424242"],
//         placeholder: "rgba(0, 0, 0, 0.6)",
//         disabled: "#9e9e9e",
//         accent: ["","#70c50e"]
//     }    
// }

export const MatConfig = {
    style: STYLE_EAST,
    os: OS_ANDROID,
    theme: "default",
    themes: {
        "default": {},//dftTheme
    },
    icons: {}
}

const theme = function(){
    return MatConfig.themes[MatConfig.theme]
}


const Mat = {
    icon: function(name, active){
        let osIcon = MatConfig.icons[name][MatConfig.os]
        osIcon ||= MatConfig.icons[name][OS_ANDROID]
        if(Array.isArray(osIcon)){
            return osIcon.length==1 ? osIcon[0] : (active ? osIcon[1] : osIcon[0])
        }else{
            return osIcon
        }
    },
    setColor: function(element, matRefColor){
        if(element.attributes.color) return
        element.attributes.color = theme()[matRefColor]
    },
    color: function(name){
        return theme()[name]
    },
    colorVal: function(name){
        const color = theme().colors[name]
        return Array.isArray(color) ? color[1] : color
    },
    primeColorOfStyle: function(){
        return MatConfig.style==STYLE_WEST ? theme()[Color.primary] : theme()[Color.liubai]
    },
    primeColorName: function(){
        return MatConfig.style==STYLE_WEST ? Color.primary : Color.liubai
    },
    onPrimeColorOfStyle: function(){
        return MatConfig.style==STYLE_WEST ? theme()[Color.onPrimary] : theme()[Color.onLiubai]
    },
    onPrimeColorName: function(){
        return MatConfig.style==STYLE_WEST ? Color.onPrimary : Color.onLiubai
    },
    theme: function(){
        return theme()
    },
    accentColor: function(){//强调色
        return theme()[Color.accent]
    },
    primeColorValOfStyle: function(){
        return MatConfig.style==STYLE_WEST ? theme().colors[Color.primary][1] : theme().colors[Color.liubai][1]
    },
    placeholderColor: function(){
        return theme().colors.placeholder || placeholderColor
    },
    disableColorVal: function(){
        return theme().colors.disabled || disabledColor 
    }
}

export default Mat