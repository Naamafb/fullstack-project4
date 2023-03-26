export class StyleClass{
        constructor(){
                this.color="black";
                this.fontSize="12px";
                this.fontFamily="Arial";
        }
        set Color(color){
                this.color=color;
        }
        set FontSize(fontSize){
                this.fontSize=fontSize;
        }
        set FontFamily(fontFamily){
                this.fontFamily=fontFamily;

        }

        returnObject(){
                return ({
                        color:this.color,
                        fontSize:this.fontSize,
                        fontFamily:this.fontFamily
                });
        }
}
