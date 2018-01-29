<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Tallenna</title>
    </head>
    <body>
        <?php
        $nimi = $_POST['namei'];
        $companyName = $_POST['companyi'];
        $email = $_POST['emaili'];
        $yourWebsite = $_POST['websitei'];
        $yourFacebook = $_POST['facebooki'];
        $yourTwitter = $_POST['twitteri'];
        $yourSteam = $_POST['steami'];
        $yourYoutube = $_POST['youtubei'];
        $gameName = $_POST['gamei'];
        $gameSlogan = $_POST['slogani'];
        $gameDetails = $_POST['commenti'];
        
        $tietokanta = new PDO('mysql:host=localhost; dbname=ryhma4;','n7pete00','');
        $sql = "insert into peliilmoitus(namei,companyi,emaili,websitei,facebooki,twitteri,steami,youtubei,gamei,slogani,commenti) values ('$nimi','$companyName','$email','$yourWebsite','$yourFacebook','$yourTwitter','$yourSteam','$yourYoutube','$gameName',' $gameSlogan','$gameDetails')";
        $tietokanta->query($sql);
        print "<p>Viesti lähetetty</p>";
        ?>
    </body>
</html>