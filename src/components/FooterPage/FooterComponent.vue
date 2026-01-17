<template>
    <footer class="footer mt-4">
        <!-- <p>&copy; 2023 Your Company. All rights reserved.</p> -->
        <p class="fst-italic">UNIFEI - UNIVERSIDADE FEDERAL DE ITAJUBÁ</p>
        <p>IESTI-Instituto de Engenharia de Sistemas e Tecnologia da Informação</p>
        <p>v. BPS, 1303 - Pinheirinho, Itajubá - MG, 37500-903</p>
        <p>Telefone: (+55)(35) 3629-1101 / Email: spadoti@unifei.edu.br</p>
        
        <!-- <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div> -->
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
/* Footer styles */
/* Footer styles */
.footer {
    position: relative;
    width: 100%;
    bottom: 0;
    background-color: #f5f5f5;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.footer p {
    margin: 0;
}

.footer a {
    color: #007bff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

.footer .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.footer .social-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 5px;
    color: #ffffff;
    background-color: #007bff;
    transition: background-color 0.3s ease;
}

.footer .social-icons a:hover {
    background-color: #0056b3;
}

/* Optional: Add media query to adjust footer size on smaller screens */
@media (max-width: 768px) {
    .footer {
        padding: 10px 0;
    }
}
</style>