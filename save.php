<?php

require_once('connect.php');
$pdo = connectDB();
$table = "konzatu"; //テーブル名

//POSTうけとり
$ninzu = $_POST["ninzu"];

    try {

        $stmt = $pdo->prepare("UPDATE $table SET ninzu = :ninzu WHERE id = 0"); //idは適宜書き換え
        $stmt->bindValue(':ninzu', $ninzu, PDO::PARAM_STR);
        $stmt->execute();

    } catch (PDOException $e) {
        var_dump($e->getMessage());
    }

$pdo = null;    //DB切断
$res = "NG";
if($stmt) $res = "OK";
echo $res;  //結果を返す
var_dump($stmt);
?>