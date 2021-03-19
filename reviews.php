<?php include 'header.php' ?>
<content class="reviews">
  <div class="reviews-navbar">
    <?php
    /*
    $categoriesArray = ['Jeux Vidéo', 'Film', 'Musique'];
    for ($i = 0; $i < count($categoriesArray); $i++) {
      echo "<li><img src='source/logo-$categoriesArray.png'</li>";
    } 
    */
    ?>
    <ul class="reviews-logo">
      <li><img src='source/logo-Jeux Vidéo.png'></li>
      <li><img src='source/logo-Film.png'></li>
      <li><img src='source/logo-Musique.png'></li>
    </ul>
  </div>

  <div class="reviews-card">
    <div class="cat-1">
      <h1>Critiques Jeux Vidéos</h1>
      <div id="card">
        <img src="source/black_flag.jpeg"><br />
        Nom: Assassin’s Creed: Black Flag<br />
        Editeur: Ubisoft<br />
        Date de sortie: 2013<br />
        <p>Un monde ouvert énorme et immersif dans les caraibes de l’age d’or de la piraterie. On se régale d’aller
          tranquer les templiers sur des iles bien remplies, les combats navals sont bien fait (au détriment du parkour)
          et rafraichissent le gameplay de la série. Niveau scénario c’est par contre le début de la fin pour la série,
          fini l’arc Desmond qu’on suit depuis le premier épisode, la couche «présent» est sans interet et votre personnage
          Edward Kennway est extrèmement balourd et moins charismatique qu’Eric Zemmmour. J’y ai quand même passé un très bon moment
          et vous le recommande chaudement.</p>
      </div>
    </div>

    <div class="cat-2">
      <h1>Critiques Filmographiques</h1>
      <div id="card">
        <img src="source/choc_titans.jpg"><br />
        Nom : Le Choc des Titans<br />
        Réalisateur: Louis Leterrier<br />
        Date de sortie : 2010<br />
        <p>Un peplum sur la mythologie grècque version 21ème siècle (donc quasi intégralement sous fond vert, comme 300)
          avec un casting XXL (Liam Neeson aka Qui-gon Jinn, Ralph Fiennes aka Voldemort, Madds Mikkelsen aka le mec qui cherche
          votre bébé dans Death Stranding et qui pleure du pétrole avec ses yeux..). Scénario assez classique et personnages un peu
          caricaturaux mais dans l’ensemble un bon diversement pour en prendre plein les yeux sans trop se prendre la tête, j’ai bien aimé.
        <p>
      </div>
    </div>

    <div class="cat-3">
      <h1>Critiques Littéraires</h1>
      <div id="card">
        <img src="source/obelix_compagnie.jpg"><br />
        Nom: Obélix et Compagnie<br />
        Auteur: René Goscinny et Albert Uderzo<br />
        Date de sortie: 1976<br />
        <p>Cesar fait appel à un jeune romain sorti d’une grande école pour pervertir le célèbre village gaulois à l’aide de l’or et du travail.
          Il achète les menhir d’Obelix à un prix toujours plus fort et le contraignant à produire toujours plus. Au point que tout le village fini
          par travailler pour un Obelix perverti par l’argent et isolé de ses amis Asterix et Idefix et des plaisir simples de la chasse et la rigolade
          entre copains. Une belle histoire et une jolie morale anti-capitaliste qui en font pour moi undes meilleurs albums de la collection Asterix.</p>
      </div>
    </div>
  </div>
</content>
<?php include 'footer.php' ?>