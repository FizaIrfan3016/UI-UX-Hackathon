

export interface Foods {
    _id: string;
    name: string;
    _type: "food";
    image?:{
        asset : {
            _ref : string;
            _type : "image";        
        }
    };
    category : string;
    tags : string
    price : number;
    originalPrice : number;
    description : "text";
    slug: {
        _type:"slug";
        current: string;
    }
}