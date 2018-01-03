Node.prototype.zoom = function(value){
    if(value==null){
        if(this.style.transform.match(/scale\((\s*[0-9\.]+\s*)\)/i) == null){
            this._zoom = 1;
        }else{
            this._zoom = parseInt(this.style.transform.match(/scale\(([0-9\.\s])\)/i)[1]); 
        }
        
        return this._zoom == null ? 1 : this._zoom;
    }else{
        this._zoom = parseFloat(value);
        if(this.style.transform.match(/scale/i) == null){
            this.style.transform += ' scale('+this._zoom+')';
        }else{
            this.style.transform =this.style.transform.replace(/scale\([0-9\.\s]+\)/i,"scale("+this._zoom+")");
        }
    }
    return this._zoom;
}
Node.prototype.rotate = function(value){
    if(value==null){
        if(this.style.transform.match(/rotate\(\s*([0-9\.]+)deg\s*\)/i) == null){
            this._rotate = 0;
        }else{
            this._rotate = parseInt(this.style.transform.match(/rotate\(\s*([0-9\.]+)deg\s*\)/i)[1]); 
        }
        
        return this._rotate == null ? 0 : this._rotate;
    }else{
        this._rotate = parseFloat(value);
        if(this.style.transform.match(/rotate/i) == null){
            this.style.transform += ' rotate('+this._rotate+'deg)';
        }else{
            this.style.transform =this.style.transform.replace(/rotate\([0-9\.\s]+deg\)/i,"rotate("+this._rotate+"deg)");
        }
    }
    return this._rotate;
}
