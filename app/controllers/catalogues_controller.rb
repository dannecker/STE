class CataloguesController < ApplicationController
  def defence
    @title = 'Defence Products'

    root_category = Category.find_by(name: 'Defence Products')
    category_id = params[:id] || root_category.id

    @current_category = Category.find(category_id)
    @top_level_categories = root_category.children

    @subcategories = @current_category.children

    @descendants = @current_category.subtree.page params[:page]
    @featured = Product.where(featured: true)
  end

  def research
    @title = 'Research & Development'

    root_category = Category.find_by(name: 'Research & Development')
    category_id = params[:id] || root_category.id

    @current_category = Category.find(category_id)
    @top_level_categories = root_category.children

    @subcategories = @current_category.children

    @descendants = @current_category.subtree.page params[:page]
  end

  def downloads
    @title = 'Available Downloads'

    @downloads = Document.downloads
  end

  def item
    product_id = params[:id] || Product.first.id

    @product = Product.find(product_id)
    @title = @product.name
  end
end
