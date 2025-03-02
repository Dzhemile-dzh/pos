<?php
header("Content-Type: application/json");
require_once 'db.php';

/**
 * @param PDO $pdo
 * @return string JSON отговор със списък от продукти
 */
function getProducts(PDO $pdo) {
    $stmt = $pdo->prepare("SELECT id, name, price FROM products");
    $stmt->execute();
    $products = $stmt->fetchAll();
    
    return json_encode($products);
}

echo getProducts($pdo);
?>
