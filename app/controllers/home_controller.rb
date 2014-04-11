class HomeController < ApplicationController
  def index
    @defence_categories = Category.find_by(name: "Defence Products").children
    @research_categories = Category.find_by(name: "Research & Development").children

    @posts = Post.limit(3)

    @mbt = Product.where('lower(name) LIKE ?', '%yatagan%').take.id
    @ruslan = Product.where('lower(name) LIKE ?', '%ruslan%').take.id
    @kolchuga = Product.where('lower(name) LIKE ?', '%kolchuga%').take.id
  end
end
