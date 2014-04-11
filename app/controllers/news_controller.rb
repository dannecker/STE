class NewsController < ApplicationController
  before_action :fetch_tags_and_posts

  def list
    @title = 'Newsroom'

    @posts = Post.all.page params[:page]
  end

  def tag
    tag_id = params[:tag_id] || Tag.first.id
    tag = Tag.find(tag_id)

    @posts = tag.posts.page params[:page]
    @title = "News tagged with #{tag.name}"

    render 'news/list'
  end

  def show
    post_id = params[:id] || Post.first.id

    @post = Post.find(post_id)
    @title = @post.title
  end

  private
  def fetch_tags_and_posts
    @tags = Tag.all.limit(10)
    @last_posts = Post.all.limit(5)
  end
end
