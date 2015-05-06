require 'rubygems'
require 'pushmeup'
require 'openssl'
   
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE


GCM.host = 'https://android.googleapis.com/gcm/send'
GCM.format = :json
GCM.key = "AIzaSyDBVuvUR61u-F_REDeDQJFA3_VaWBgEdRg"
GCM.http_proxy(addr="proxyusers.intranatixis.com", port=8080, user="ramonite", pass="Mafarazo75")
destination = ["APA91bF-TvYSXJnifKhUqoXOxI5b82YEXBz84QTBLtufdJx_woduTU3fQQMo9Gi2p1qyKePiYle-IDs7ISVyuNaU9swJV0nxVFfR9W1VTDKjos3wr6ILijI78mWyVKkiN-BgxH8sQSaMiBzH7riFaoNYepuBLpXtfA"]
data = {:message => "Test Push multidevices", :msgcnt => "1", :collapse_key => "Test"}
GCM.send_notification( destination, data)
