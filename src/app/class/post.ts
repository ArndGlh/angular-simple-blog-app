export class Post {

    private titre: string;
    private content: string;
    private loveIts: number;
    private createdAt: Date;
    private index: number;

  constructor() {
     this.titre = "";
     this.content = "";
     this.loveIts = 0;
  }

  setTitre(titre: string){
    this.titre = titre;
  }

  setContent(content: string){
    this.content = content;
  }
  
  setloveIts(loveIts: number){
    this.loveIts = loveIts;
  }

  
  getTitre(){
    return this.titre; 
  }

  getContent(){
    return this.content;
  }

  getLoveIts(){
    return this.loveIts;
  }

  getCreatedAt(){
    return this.createdAt
  }

  setCreatedAt(date: string){
      this.createdAt = new Date(date);
  }

  setIndex(index: number){
    this.index = index;
  }

  getIndex(){
    return this.index;
  }

  incrementeLoveIts(){
    console.log("increment loveits avant : "+this.loveIts);
    this.loveIts++;
    console.log("increment loveits after : "+this.loveIts);
  }

  decrementeLoveIts(){
    console.log("decremente loveits : "+this.loveIts);
    this.loveIts--;
    console.log("decremente loveits : "+this.loveIts);
  }
}