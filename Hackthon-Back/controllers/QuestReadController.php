<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/agoravai/Hackthon-Back/models/Quest.php';

class QuestReadController {
    public function readUserResponse($usuario_id) {
        $quest = new Quest();
        $quest->setUsuarioId($usuario_id);
        return $quest->readUserResponses(); 
}
};

