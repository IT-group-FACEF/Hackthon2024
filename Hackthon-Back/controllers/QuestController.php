<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/agoravai/Hackthon-Back/models/Quest.php';

class QuestInsertController {
    public function insertUserResponse($usuario_id, $question_id, $response) {
        $quest = new Quest();
        $quest->setUsuarioId($usuario_id);
        $quest->setQuestionId($question_id);
        $quest->setResponse($response);
        $quest->setCreatedAt(date("Y-m-d H:i:s")); 
        
        $quest->insertUserResponse();
        
        return ['status' => 'success', 'message' => 'Resposta inserida com sucesso.'];
    }
}
?>
