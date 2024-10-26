<?php 
require_once $_SERVER['DOCUMENT_ROOT'] . '/agoravai/Hackthon-Back/config/db.php';

class Quest {
    private $id;
    private $usuario_id;
    private $question_id;
    private $response;
    private $created_at;

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getUsuarioId(){
        return $this->usuario_id;
    }

    public function setUsuarioId($usuario_id){
        $this->usuario_id = $usuario_id;
    }

    public function getQuestionId(){
        return $this->question_id;
    }

    public function setQuestionId($question_id){
        $this->question_id = $question_id;
    }

    public function getResponse(){
        return $this->response;
    }

    public function setResponse($response){
        $this->response = $response;
    }
    
    public function getCreatedAt(){
        return $this->created_at;
    }

    public function setCreatedAt($created_at){
        $this->created_at = $created_at;
    }
    
    public function insertUserResponse(){
        try {
            $connection = Conection::connect();  
            $sql = "INSERT INTO respostas (usuario_id, question_id, response, created_at) VALUES (:usuario_id, :question_id, :response, :created_at)";
            $stmt = $connection->prepare($sql);
            $stmt->bindValue(':usuario_id', $this->getUsuarioId());
            $stmt->bindValue(':question_id', $this->getQuestionId());
            $stmt->bindValue(':response', $this->getResponse());
            $stmt->bindValue(':created_at', $this->getCreatedAt());
            $stmt->execute();

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function readUserResponse(){
        try {
            $connection = Conection::connect();
            $sql = "SELECT * FROM respostas WHERE usuario_id = :usuario_id";
            $stmt = $connection->prepare($sql);
            $stmt->bindValue(':usuario_id', $this->getUsuarioId());
            $stmt->execute();

            // Recupera os dados do usuário
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Verifica se a resposta foi encontrada
            if ($result) {
                return [
                    'question_id' => $result['question_id'],
                    'response' => $result['response'],
                    'created_at' => $result['created_at']
                ];
            } else {
                return null; // Nenhuma resposta encontrada
            }
    
        } catch (PDOException $e) {
            echo $e->getMessage();
            return null; // Retorna null em caso de erro
        }
    }
}
?>
