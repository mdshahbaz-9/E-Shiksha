import React from 'react'
import { createCategory } from '../../../services/operations/courseDetailsAPI';
import { useSelector } from 'react-redux';

const AdminPannel = () => {
    const { token } = useSelector((state) => state.auth);
    const [category, setCategory] = React.useState({
        name: '',
        description: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!category.name || !category.description) {
            return;
        }
        console.log(category);
        const res = await createCategory({
            name: category.name,
            description: category.description
        }, token);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 sm:p-6 lg:p-8 relative">
            {/* Background Pattern */}
            <div
                className='absolute inset-0 opacity-30 pointer-events-none'
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                }}
            ></div>
            <div className="relative max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2M5 13l-2-2 2-2m8-6v12" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Admin Panel
                    </h1>
                    <p className="text-slate-300 text-lg">Create and manage course categories</p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                    
                    <div className="relative">
                        <div className="flex items-center mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
                            <h2 className="text-2xl font-semibold text-pure-greys-50">Create New Category</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Category Name Field */}
                            <div className="group">
                                <label htmlFor="category" className="block text-pure-greys-50 text-lg font-medium mb-3 group-focus-within:text-blue-400 transition-colors duration-200">
                                    <span className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        Category Name
                                    </span>
                                </label>
                                <div className="relative">
                                    <input 
                                        value={category.name} 
                                        onChange={(e) => setCategory({ ...category, name: e.target.value })} 
                                        type="text" 
                                        name="category" 
                                        id="category" 
                                        className="form-style w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-pure-greys-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10 backdrop-blur-sm text-lg" 
                                        placeholder='Enter category name' 
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Category Description Field */}
                            <div className="group">
                                <label htmlFor="description" className="block text-pure-greys-50 text-lg font-medium mb-3 group-focus-within:text-blue-400 transition-colors duration-200">
                                    <span className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                        </svg>
                                        Category Description
                                    </span>
                                </label>
                                <div className="relative">
                                    <textarea 
                                        value={category.description} 
                                        onChange={(e) => setCategory({ ...category, description: e.target.value })} 
                                        name="description" 
                                        id="description" 
                                        rows="4"
                                        className="form-style w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-pure-greys-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10 backdrop-blur-sm text-lg resize-none" 
                                        placeholder='Enter category description' 
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button 
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full relative overflow-hidden group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Create Category
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                </button>
                            </div>

                            
                        </div>
                        
                    </div>

                    
                </div>
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-blue-800">
                                    Tips for Creating Categories
                                </h3>
                                <div className="mt-2 text-sm text-blue-700">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Use clear, descriptive names that students will understand</li>
                                        <li>Keep descriptions concise but informative</li>
                                        <li>Consider how categories will appear in navigation menus</li>
                                        <li>Ensure categories are broad enough to contain multiple courses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Footer Info */}
                <div className="text-center mt-8 text-slate-400">
                    <p className="text-sm">Manage your course categories efficiently</p>
                </div>
            </div>
        </div>
    )
}

export default AdminPannel


