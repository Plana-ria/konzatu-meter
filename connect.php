<?php

//PDO MySQL接続
function connectDB(){

    //ユーザ名やDBアドレス
    $dsn = 'mysql:dbname=XXXXXXX; host=XXX.XXX.XXX.XXX; charset=utf8';
    $username = 'XXXX';
    $password = 'XXXX';

    try {
        $pdo = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        exit('' . $e->getMessage());
    }

    return $pdo;
}

?>