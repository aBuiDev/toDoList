class ProjectsController < ApplicationController
    def index
    end

    def new
        @test = TestTable.new
    end

    def create        
        test = TestTable.create(permitted_params)
        redirect_to test_table_path(test)        
    end

    def show
        @test = TestTable.find(params[:id])
    end

    def edit
    end

    def destroy
    end

    private

    def permitted_params
        params.require(:test_table).permit(:word, :number)
    end

end
