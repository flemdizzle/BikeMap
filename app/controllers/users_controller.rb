class UsersController < ApplicationController
    skip_before_action :require_signin, only: [:new, :create]
    before_filter :find_user, only: [:edit, :update, :show, :destroy]

    def index
      @users = User.all
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)
      if @user.save
          sign_in @user
          redirect_to @user
      else
          render :new
      end
    end

    def show
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private

    def find_user
      @user = User.find(params[:id])
   end

   def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
   end
end