module Unfuddle
  module ActionHandler
    def button  
      ticket = payload.tickets.first
      html = ''    
      http.basic_auth(settings.username, settings.password)
      begin
        response = create_message(payload.overlay.title,payload.overlay.body)
        html = message_html_comment(response['Location'], payload.overlay.title) if response and response['Location']
        comment_on_ticket(ticket, html)
        response
      rescue  Exception => e
        return [500, e.message]          
      end
      [200, "Message successfully created on Unfuddle"]
    end
  end
end

module Unfuddle
  class Base < SupportBeeApp::Base
    string :subdomain, :required => true, :label => 'Subdomain'
    string :username, :required => true, :label => 'Username'
    password :password, :required => true    
    string :project_id, :required => true, :label => 'Enter Project ID'    
    boolean :use_ssl, :default => true, :label => 'Use SSL'

    white_list :subdomain, :username, :use_ssl, :project_id

    private

    def create_message(title, body)
      response = http.post "https://#{settings.subdomain}.unfuddle.com/api/v1/projects/#{settings.project_id}/messages.json" do |req|
        req.headers['Content-Type'] = 'application/json'
        req.body = {message:{title:title, body:body}}.to_json
      end
      response.status == 201 ? true : false
    end

    def message_html_comment(target_url, message_title)
      "Message created in Unfuddle<br/> <a href='#{target_url}'>#{message_title}</a>"
    end

    def comment_on_ticket(ticket, html)
      ticket.comment(:html => html)
    end

  end
end

