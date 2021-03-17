<<<<<<< HEAD



<form id='contactForm'>
    <fieldset>
        <legend>Formulaire de contact</legend>
        <div class='champ'>
            <label for='nom'>Nom: </label>
            <input type='text' id='nom' name='nom' minlenght='2' maxlength='25' required>
        </div>
        <div class='champ'>
            <label for='prenom'>Prénom: </label>
            <input type='text' id='prenom' name='prenom' minlenght='2' maxlength='25' required>
        </div>
        <div class='champ'>
            <label for='mail'>Votre adresse mail:</label>
            <input type='mail' id='mail' name='mail' required>
        </div>
        <div class='champ'>
            <label for='motif'> Pourquoi souhaitez vous nous contacter?</label>
            <select id='motif' name='motif'>
                <option value='menace'>Insulte/Menace</option>
                <option value='don'>Compliment/Don</option>
                <option value='error'>Vous souhaitez nous signaler une erreur ou un problème sur le site.</option>
                <option value='autres'>Vous souhaitez avoir d'autres informations.</option>
            </select>
        <div class='champ'>
            <label for='text'>Ecrivez votre message:</label><br>
            <textarea name='mess' palcehorder='Message' rows='15' cols='40' maxlength='500'></textarea>
        </div>
        <input type='submit' value='Envoyez'>
    </fieldset>
</form>


=======
<?php include 'header.php' ?>
    <content>
      INSERER FORMULAIRE
    </content>
<?php include 'footer.php' ?>
>>>>>>> 86a65d4efe65147104033bf6694834c56c93a07c
