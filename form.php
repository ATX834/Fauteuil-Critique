<?php include 'header.php' ?>
    <content id ='contactFormContent'>
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
                <option value='don'>Compliment/Don</option>
                <option value='menace'>Insulte/Menace</option>
                <option value='error'>Vous souhaitez nous signaler une erreur ou un problème sur le site.</option>
                <option value='autres'>Vous souhaitez avoir d'autres informations.</option>
            </select>
        <div class='champ'>
            <label for='text'>Ecrivez votre message:</label><br>
            <textarea name='mess' palcehorder='Message' rows='10' cols='35' maxlength='500'></textarea>
        </div>
        <input type='submit' value='Envoyez'>
    </fieldset>
</form>
    </content>
<?php include 'footer.php' ?>
