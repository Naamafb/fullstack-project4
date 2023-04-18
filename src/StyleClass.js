export class StyleClass{
        constructor(color="black",fontFamily="12px",fontSize="Arial"){
                // this.color="black";
                // this.fontSize="12px";
                // this.fontFamily="Arial";
                this.color=color;
                this.fontFamily=fontFamily;
                this.fontSize=fontSize;
        }
        set Color(color){
                this.color=color;
        }
        get Color(){
                return this.color;
        }
        set FontSize(fontSize){
                this.fontSize=fontSize;
        }
        get FontSize(){
                return this.fontSize;
        }
        set FontFamily(fontFamily){
                this.fontFamily=fontFamily;

        }
        get FontFamily(){
                return this.fontFamily;
        }

        returnObject(){
                return ({
                        color:this.color,
                        fontSize:this.fontSize,
                        fontFamily:this.fontFamily
                });
        }
}
