import { Post } from '../class/post';

export class PostService {
    private post1: Post;
    private post2: Post;
    private post3: Post;

    posts: Post[];
    
    constructor(){

        this.post1 = new Post();
        this.post1.setIndex(1);
        this.post1.setTitre("Pourquoi la poule traverse la route ?");
        this.post1.setloveIts(10);
        this.post1.setContent("Le fait que ce soit le poulet qui traverse la route ou que ce soit la route qui se meuve sous le poulet dépend uniquement de votre référentiel. Les poulets, au travers de longues périodes, ont été naturellement sélectionnés de telle sorte qu'ils soient génétiquement enclins à traverser les routes. La troisième loi des Poulets énonce qu'un poulet doit protéger sa propre existence sauf si cette protection le force à désobéir à un ordre humain ou à blesser un humain.")
        this.post1.setCreatedAt('1995-12-17T03:24:00');

        this.post2 = new Post();
        this.post2.setIndex(2);
        this.post2.setTitre("Allo ? A l'Huile !");
        this.post2.setloveIts(-40);
        this.post2.setContent("Hue hue hue");
        this.post2.setCreatedAt('2008-05-02T12:34:09');

        this.post3 = new Post();
        this.post3.setIndex(3);
        this.post3.setTitre("Parce que la forme est contraignante, l'idée jaillit plus intense !");
        this.post3.setloveIts(50);
        this.post3.setContent("L'un des exemples les plus célèbres de contrainte dans le domaine littéraire est La Disparition (1969) de Georges Perec, qui ne comporte pas la lettre e. Un autre exemple est celui de l'auteur britannique Christine Brooke-Rose dans Remake (1996), qui ne comporte pas la lettre t, et Between (1968), qui ne contient pas le verbe to be (être).");
        this.post3.setCreatedAt('2017-01-18T08:54:48');


        this.posts = [this.post1, this.post2, this.post3];
    }
    
    like(i: number) {
        this.posts[i].incrementeLoveIts();
    }
    
    dislike(i: number) {
        this.posts[i].decrementeLoveIts();
    }

    getPostsById(id: number) {
        const post = this.posts.find(
          (s) => {
            return s.getIndex() === id;
          }
        );
        return post;
    }
}