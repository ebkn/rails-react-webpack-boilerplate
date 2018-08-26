# frozen_string_literal: true

module ApplicationHelper
  def webpack_path(filename)
    if Rails.env.development?
      ENV['WEBPACK_DEV_SERVER_OUTPUT_FILE']
    else
      filename
    end
  end
end
