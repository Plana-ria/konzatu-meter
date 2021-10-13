<?php

require_once('connect.php');
$pdo = connectDB();
$table = "konzatu"; //テーブル名

try {

    $stmt = $pdo->prepare("SELECT * FROM $table WHERE id = 0"); //idは適宜書き換え
    $stmt->execute();

    $res = '{"ninzu":"';
    foreach ($stmt as $row) {   
        $res = $res. $row['ninzu'];
    }
    $res = $res. '"}';

} catch (PDOException $e) {
    $res = $e->getMessage();
    var_dump($res);
}

$pdo = null;    //DB切断

echo $res;  //結果を返す

?>