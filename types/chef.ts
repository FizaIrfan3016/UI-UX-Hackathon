
export interface Chefs{
    _id: string;
    name: string;
    _type: "chef";
    image?:{
        asset : {
            _ref : string;
            _type : "image";        
        }
    };
    position : string;
}