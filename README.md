# Ratting Movies Backend

Esse projeto busca resolver um desafio de construção de um frontend em react com as funcinalidades de login, criação de filmes, avaliação de filmes, e criação em massa (via arquivo json) para filmes e avaliações

Requisitos

<table>
  <thead>
    <th> Tecnologia </th>
    <th> Versão </th>
  </thead>
  <tbody>
    <tr>
      <td> NodeJs </td>
      <td> 18.1.0 </td>
    </tr>   
  </tbody>
</table>

 ### Features
 <ul>   
   <li> Login </li>
   <li> Criação de filme </li>
   <li> Criação de avaliação de filme  </li>
   <li> Atualização de avaliação de filme </li>
   <li> Criação de avaliações em massa </li>
   <li> Criação de filmes em massa </li>
 </ul>

 ### Install and run

 <li>
    Clone o presente repositório em seu computador

     git@github.com:silvavinicyus/rating-movies.git    
 </li>
 
 <li>
    Instale as dependencias do projeto

     npm install    
 </li>

 <li>
    Execute o frontend 

     npm run dev   
 </li>


 ### Seed

 Para utilizar o sistema, utilize o usuário padrão criado com os seeds do rails:

 email: admin@rotten.com <br>
 password: admin


 ### Importação de dados

 Para fazer a importação de filmes e notas, execute os seguintes passos:

 * Faça login na aplicação, com o usuário e senha citado acima

 * Na página inicial, seleciona a opção "Importar"
![image](https://github.com/silvavinicyus/rating-movies/assets/24615008/10a09089-9dae-4f97-8ca0-1d266ed04cb8)

 * No modal aberto, escolha a opção de importação desejada (Filmes ou notas) e clique em "Save"

![image](https://github.com/silvavinicyus/rating-movies/assets/24615008/0e7aac20-5740-45ed-8082-28ac131b1950)

* O sistema então processará a importação e em alguns segundos aparecerá na tela inicial os novos dados.


 ### Sobre a Importação

 #### Filmes
 Para a importação dos filmes, o formato aceito é o de JSON, e o JSON deve seguir o seguinte padrão:  
 
    {
	   "movies": [
          {
              "title": "The Shawshank Redemption",
              "director": "Frank Darabont"
          },
          {
              "title": "The Godfather",
              "director": "Francis Ford Coppola"
          },
          ...
      ]
    }
  
### Avaliaçãoes de filmes
Para a importação das avaliações, o formato aceito também é o de JSON, e o JSON deve seguir o seguinte padrão:

    {
	   "user_movies": [
            {
                    "movie_id": 1,
   			"score": 5
   		},
   		{
   			"movie_id": 2,
   			"score": 7
   		},
   		{
   			"movie_id": 3,
   			"score": 3
   		},
   		{
   			"movie_id": 4,
   			"score": 8
   		},
         ...
      ]
    }

    
#### Arquivos prontos
Caso queira, há agora 2 arquivos <a href="https://github.com/silvavinicyus/ratting-movies-backend/tree/main/jsons"> aqui </a> que contém exemplos de arquivos de importação para filmes (movies.json) e para notas (movies_scores.json)

