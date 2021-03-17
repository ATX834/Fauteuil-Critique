<?php include 'header.php' ?>
  <content>
    <div class="categories">
<?php
$categoriesArray = ["Jeux Vidéo","Film","Musique"];
for($i = 0; $i < count($categoriesArray); $i++)
{
    echo "<li>$categoriesArray[$i]</li>";
}
?>
  </div>
  <div class="reviews-card">
    <div> Critiques jeux vidéos</div>
    <div>Critiques filmographiques</div>
    <div>Critiques musicales</div>
    </div>
  </content>
<?php include 'footer.php' ?>
