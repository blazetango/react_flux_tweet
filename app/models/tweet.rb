class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(option={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end


  def gravatar
	  hash = Digest::MD5.hexdigest(user.email)
	  'http://www.gravatar.com/avatar/#{hash}'
	end


end
