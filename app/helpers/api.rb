require 'rest-client'

module Api
  def api_call(http_method, url, payload = {}, headers = {})
    # binding.break
    begin
      response = RestClient::Request.execute(
        url: url,
        method: http_method,
        payload: payload,
        headers: headers,
        verify_ssl: false
      )
    rescue RestClient::ExceptionWithResponse => e
      return {status: :error}
    end
    # binding.break
  end
end
