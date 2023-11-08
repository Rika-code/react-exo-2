
function Header () {
    const userLogged = {
lastname : "Malique-Girerd",
firstname : "Chloé",
job : "en formation dev web"
    }
    const isUserLogged = true;
    const itemCart = 10;
return (
<header>
    <h1>Mon Titre de Fou </h1>
    <nav>
        <ul>
            {isUserLogged ? (
  <li>
  {userLogged.firstname} {userLogged.lastname} - {userLogged.job}
</li>
) : (
<li>Veuillez vous connecter</li>
)}
        
            <li>Accueil</li>
            <li> Contact</li>

            {itemCart > 0  ? <li> Cart  = {itemCart}</li> : <li> Pas d'item dnas le panier</li>}
        </ul>
    </nav>
</header>
)}
export default Header