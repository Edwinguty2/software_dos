/*

TEST-9ae9dc4e-1d45-419c-8d8e-9303ba6ebd6a

TEST-240639848989783-110620-d1c15d60e9e5ea626385adb6ba82a53c-1012945351

curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MPE"}'

VENDEDOR
{
    "id": 1013918210,
    "nickname": "TESTNEXEJKI8",
    "password": "qatest497",
    "site_status": "active",
    "email": "test_user_88362721@testuser.com"
}

Public Key
APP_USR-f7bde0ab-2dbd-4e13-afbd-020d8733a70f

Access Token
APP_USR-8513584773502322-110620-e540493f56a84d20e06cd724320ae167-1013918210
******************************
COMPRADOR
{
    "id": 1013915476,
    "nickname": "TETE1811176",
    "password": "qatest4583",
    "site_status": "active",
    "email": "test_user_43681878@testuser.com"
}

Credenciales de prueba
Usa estas claves para simular pagos y testear tus integraciones.
Mastercard	5031 7557 3453 0604	123	11/25

Visa	
4009 1753 3280 6176
123	
11/25 
APRO 
CONT
OTHE
12345678
test_user_43681878@testuser.com
American Express	3711 803032 57522	1234	11/25

http://localhost:3001/cliente/confirmacion?collection_id=18012022665&collection_status=approved&payment_id=18012022665&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=3549915031&preference_id=1013918210-d3ad570b-d697-4056-bbb4-40f7f3a149de&site_id=MPE&processing_mode=aggregator&merchant_account_id=null

{
collection_id: 18012022665
collection_status: approved
payment_id: 18012022665
status: approved
external_reference: null
payment_type: credit_card
merchant_order_id: 3549915031
preference_id: 1013918210-d3ad570b-d697-4056-bbb4-40f7f3a149de
site_id: MPE
processing_mode: aggregator
merchant_account_id: nul
}
*/

/*
https://mochilaslogan.com/?
collection_id=18396878828&
collection_status=in_process&
payment_id=18396878828&
status=in_process&
external_reference=null&
payment_type=debit_card&
merchant_order_id=3656798088&
preference_id=1012945351-e05c4125-2c81-4c20-b527-042b689f655b&
site_id=MPE&
processing_mode=aggregator&
merchant_account_id=null

*/