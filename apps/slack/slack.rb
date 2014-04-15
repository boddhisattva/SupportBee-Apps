module Slack

  module EventHandler

   def ticket_created
      return unless settings.notify_ticket_created.to_s == '1'
      post_ticket(payload.ticket)
      true
    end

    def agent_reply_created
      return unless settings.notify_agent_reply_created.to_s == '1'
      #post_reply(payload.reply, payload.ticket)
      post_agent_reply(payload.reply, payload.ticket)
      true
    end

    def customer_reply_created
      return unless settings.notify_customer_reply_created.to_s == '1'
      #post_reply(payload.reply, payload.ticket)
      post_customer_reply(payload.reply, payload.ticket)
      true
    end

    def comment_created
      return unless settings.notify_comment_created.to_s == '1'      
      post_comment(payload.comment, payload.ticket)
      true      
    end    

  end

end

module Slack

  module ActionHandler

    def button     
     [200, "Success"]
    end

  end

end

module Slack

  require 'json'

  class Base < SupportBeeApp::Base
    
    string :token, :required => true, :hint => 'Slack API Token'
    string :channel, :required => true, :label => 'Channel HashTag'
    string :name, :required => true, :label => 'Publisher Name'
    boolean :notify_ticket_created, :default => true, :label => 'Notify when Ticket is created'
    boolean :notify_customer_reply_created, :default => true, :label => "Notify when a customer replied"
    boolean :notify_agent_reply_created, :default => true, :label => "Notify when an agent replies"
    boolean :notify_comment_created, :default => true, :label => "Notify when a comment is posted"
    boolean :post_content, :default => false, :label => "Post Full Content to Slack"

    white_list  :notify_ticket_created, 
                :notify_agent_reply_created, 
                :notify_customer_reply_created, 
                :notify_comment_created,
                :post_content


    private   

    def post_ticket(ticket)
      text = "*New Ticket* from #{ticket.requester.name}: <https://#{auth.subdomain}.supportbee.com/tickets/#{ticket.id}|#{ticket.subject}>"

      #post_to_slack(ticket.content.text)
      post_to_slack(text)
    end

    def post_agent_reply(reply, ticket)
      text = "*Agent Reply* from #{reply.replier.name} in <https://#{auth.subdomain}.supportbee.com/tickets/#{ticket.id}|#{ticket.subject}>"
      post_to_slack(text)
    end

    def post_customer_reply(reply, ticket)
      text = "*Customer Reply* from #{reply.replier.name} in <https://#{auth.subdomain}.supportbee.com/tickets/#{ticket.id}|#{ticket.subject}>"
      post_to_slack(text)
    end

    # def post_reply(reply,ticket)
    #   text = "RE: #{ticket.subject} from #{reply.replier.name} (#{reply.replier.email})"
    #   post_to_slack(text)
    # end

    def post_comment(comment, ticket)
      text = "*Comment* from #{comment.commenter.name} on <https://#{auth.subdomain}.supportbee.com/tickets/#{ticket.id}|#{ticket.subject}>"
      #text = comment.content.text
      post_to_slack(text)
    end

     def post_to_slack(text)
        payload = {"channel" => settings.channel, "username" => settings.name, "text" => text}.to_json
        response = http_post "https://supportbee.slack.com/services/hooks/incoming-webhook?token=#{settings.token}" do |req|
        req.body = payload
        end
    end    
  end
end

