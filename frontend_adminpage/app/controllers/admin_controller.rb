require 'uri'
require 'net/http'
require 'httparty'

class AdminController < ApplicationController
  include HTTParty
  def main

  end
  def index
        
    
    url = URI("http://localhost:3000/api/queries/AllPetitions")
    
    http = Net::HTTP.new(url.host, url.port)
    
    request = Net::HTTP::Get.new(url)

    response = http.request(request)
    @petition = JSON.parse(response.read_body)

    urlAccept = URI("http://localhost:3000/api/queries/AcceptedPetitions")
    httpAccept = Net::HTTP.new(urlAccept.host, urlAccept.port)
    requestAccept = Net::HTTP::Get.new(urlAccept)
    responseAccept = httpAccept.request(requestAccept)
    @Accepted = JSON.parse(responseAccept.read_body)

    url2 = URI("http://localhost:3000/api/queries/ResolvedPetitions")
    http2 = Net::HTTP.new(url2.host,url2.port)
    request2 =Net::HTTP::Get.new(url2)
    response2 = http2.request(request2)
    @resolved = JSON.parse(response2.read_body)


  end
  def new
    url = URI("http://localhost:3000/api/queries/AllPetitions")
    http = Net::HTTP.new(url.host, url.port)
    request = Net::HTTP::Get.new(url)
    response = http.request(request)
    @petition = JSON.parse(response.read_body)[0]
  end
end


# headers = {'authority'=> 'blockchain.info',
#       'method'=> "GET",
#       "path"=> "/latestblock",
#       "scheme"=> "https",
#       "accept"=> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
#       "accept-encoding"=> "gzip, deflate, br",
#       "accept-language"=> "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6",
#       "cache-control"=> "max-age=0",
#       "cookie"=> "__cfduid=d78a7c8082474b416451dbff3e1b6c6e31535200503",
#       "referer"=> "https://github.com/jdorfman/awesome-json-datasets",
#       "upgrade-insecure-requests"=> "1",
#       "user-agent"=> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
# }
# response = HTTParty.get('https://blockchain.info/latestblock',
# :headers => headers, format: :json)
# puts response.body.force_encoding("UTF-8")
# @response = JSON.parse(response.gsub('\"', '"'))