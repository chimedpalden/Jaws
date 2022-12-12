class UserNotificationsWorker
  include Sidekiq::Worker
  include Api
  # include Billing
  sidekiq_options retry: false

  def perform(order_id, email, authentication_token)
    # TaskMailer.delay.pending_tasks_email(user_id)
    # binding.break
    result = api_call(:post,
                       'http://localhost:3000/user_notifications',
                        {
                          order_id: order_id,
                          message: "Food is ready!!"
                        },
                        {
                          "X-Auth-Token" => authentication_token,
                          "X-Auth-Email" => email
                        })

  end
end
