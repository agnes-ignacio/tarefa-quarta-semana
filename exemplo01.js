//Crie objetos e arrays e acesses os valors
//a) array lista de compras 
//b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
//c) Criar um array com varios objetos de livros

listaDeCompras = ["arroz", "feijão", "carne", "cenoura", "cebola", "abobrinha", "alho", "papel higiênico"]

let contosInacabados = new Object()
contosInacabados.nome = "Contos inacabados"
contosInacabados.autor = "J.R.R. Tolkien"
contosInacabados.pagina = 624
contosInacabados.anoPublicaçao = 2009
contosInacabados.jaLeu = true

let cronicasDeNarnia = new Object()
cronicasDeNarnia.nome = "Crônicas de Nárnia"
cronicasDeNarnia.autor = "C. S. Lewis"
cronicasDeNarnia.pagina = 756
cronicasDeNarnia.anoPublicaçao = 2009
cronicasDeNarnia.jaLeu = true

let brumasDeAvalon = new Object()
brumasDeAvalon.nome = "Brumas de Avalon"
brumasDeAvalon.autor = "Marion Zimmer Bradley"
brumasDeAvalon.pagina = 968
brumasDeAvalon.anoPublicaçao = 2018
brumasDeAvalon.jaLeu = true

let harryPotterEAPedraFilosofal = new Object()
harryPotterEAPedraFilosofal.nome = "Harry Potter e a pedra filosofal"
harryPotterEAPedraFilosofal.autor = "J. K. Rowling"
harryPotterEAPedraFilosofal.pagina = 208
harryPotterEAPedraFilosofal.anoPublicaçao = 2017
harryPotterEAPedraFilosofal.jaLeu = true

const listaLivros = [contosInacabados, cronicasDeNarnia, brumasDeAvalon, harryPotterEAPedraFilosofal]

console.log(listaDeCompras)
console.log(listaLivros)