# frozen_string_literal: true

module ApplicationHelper
  def webpack_path(filename)
    if Rails.env == 'development'
      ENV['WEBPACK_SERVER_PUBLIC_PATH']
    else
      filename
    end
  end
end
