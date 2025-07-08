
import React, { useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { categories } from "../../services/apis";
import { apiConnector } from "../../services/apiConnector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router";
import { IoClose } from "react-icons/io5";

const NavBar = ({ setProgress }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const matchRoutes = (routes) => {
    return matchPath({ path: routes }, location.pathname);
  };

  const [sublinks, setsublinks] = useState([]);
  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      if (result?.data?.data?.length > 0) {
        setsublinks(result?.data?.data);
      }
      localStorage.setItem("sublinks", JSON.stringify(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchSublinks();
  }, []);

  const show = useRef();
  const overlay = useRef();
  const searchInputRef = useRef();
  const mobileSearchInputRef = useRef();

  const shownav = () => {
    setIsMenuOpen(!isMenuOpen);
    show.current.classList.toggle("navshow");
    overlay.current.classList.toggle("hidden");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowCatalog(false);
    show.current.classList.remove("navshow");
    overlay.current.classList.add("hidden");
  };

  //handling navbar scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Enhanced search handler
  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedSearchValue = searchValue.trim();
    
    if (trimmedSearchValue.length > 0) {
      setIsSearching(true);
      try {
        navigate(`/search/${encodeURIComponent(trimmedSearchValue)}`);
        setSearchValue("");
        if (isMenuOpen) closeMenu();
        // Clear focus from search inputs
        if (searchInputRef.current) searchInputRef.current.blur();
        if (mobileSearchInputRef.current) mobileSearchInputRef.current.blur();
      } catch (error) {
        console.error("Search navigation error:", error);
      } finally {
        setIsSearching(false);
      }
    }
  };

  // Handle search icon click
  const handleSearchIconClick = () => {
    if (searchValue.trim().length > 0) {
      handleSearch({ preventDefault: () => {} });
    } else {
      // Focus the search input if it's empty
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  // Handle mobile search icon click
  const handleMobileSearchIconClick = () => {
    if (searchValue.trim().length > 0) {
      handleSearch({ preventDefault: () => {} });
    } else {
      // Focus the mobile search input if it's empty
      if (mobileSearchInputRef.current) {
        mobileSearchInputRef.current.focus();
      }
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchValue("");
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  // Handle search input changes
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Handle search input focus
  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  // Handle search input blur
  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
      // Escape to clear search and blur
      if (e.key === 'Escape') {
        if (searchFocused) {
          setSearchValue("");
          if (searchInputRef.current) searchInputRef.current.blur();
          if (mobileSearchInputRef.current) mobileSearchInputRef.current.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchFocused]);

  return (
    <>
      <div
        className={`flex sm:relative bg-slate-900/95 backdrop-blur-md w-screen relative z-50 h-16 items-center justify-center border-b-[1px] border-b-slate-700/50 transition-all duration-500 shadow-lg`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              dispatch(setProgress(100));
            }}
            className="hover:scale-105 transition-transform duration-200"
          >
            <img src={logo} width={160} alt="E-Shiksha" height={42} className="drop-shadow-lg" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-x-8 text-gray-200 gap-6 items-center">
              {NavbarLinks?.map((element, index) => (
                <li key={index}>
                  {element.title === "Catalog" ? (
                    <div className="flex items-center group relative cursor-pointer">
                      <p className="font-medium hover:text-cyan-400 transition-colors duration-200">{element.title}</p>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 group-hover:text-cyan-400 transition-colors duration-200"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                          fill="currentColor"
                        />
                      </svg>

                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[220px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl bg-slate-800 border border-slate-700 p-4 text-gray-200 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-[1.8em] group-hover:opacity-100 lg:w-[300px] shadow-2xl backdrop-blur-md">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-slate-800 border-l border-t border-slate-700"></div>
                        {sublinks?.length > 0 ? (
                          sublinks?.map((element, index) => (
                            <Link
                              to={`/catalog/${element?.name}`}
                              key={index}
                              className="rounded-lg bg-transparent py-3 pl-4 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-200 font-medium"
                              onClick={() => {
                                dispatch(setProgress(30));
                              }}
                            >
                              <p className="">{element?.name}</p>
                            </Link>
                          ))
                        ) : (
                          <div className="text-gray-400 text-sm py-2">No categories available</div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={element?.path}
                      onClick={() => {
                        dispatch(setProgress(100));
                      }}
                      className="font-medium hover:text-cyan-400 transition-colors duration-200"
                    >
                      <p
                        className={`${
                          matchRoutes(element?.path)
                            ? "text-cyan-300 font-semibold"
                            : "text-gray-200"
                        }`}
                      >
                        {element?.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
              
              {/* Enhanced Desktop Search */}
              <form onSubmit={handleSearch} className="flex items-center relative">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    type="text"
                    placeholder="Search courses... (Ctrl+K)"
                    disabled={isSearching}
                    className={`focus:ring-2 ring-cyan-400 rounded-xl px-4 py-2 pr-20 text-[14px] w-56 text-gray-200 focus:outline-none focus:border-transparent bg-slate-800 border border-slate-700 placeholder-gray-400 transition-all duration-200 ${
                      isSearching ? 'opacity-70 cursor-not-allowed' : ''
                    } ${searchFocused ? 'ring-2 ring-cyan-400' : ''}`}
                  />
                  
                  {/* Search controls */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                    {searchValue && !isSearching && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="p-1 hover:bg-slate-700 rounded text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        title="Clear search"
                      >
                        <IoClose size={14} />
                      </button>
                    )}
                    
                    <button
                      type="button"
                      onClick={handleSearchIconClick}
                      disabled={isSearching}
                      className={`p-1 rounded transition-colors duration-200 ${
                        searchValue.trim().length > 0
                          ? 'text-cyan-400 hover:text-cyan-300 hover:bg-slate-700'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-slate-700'
                      } ${isSearching ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                      title={searchValue.trim().length > 0 ? 'Search' : 'Focus search'}
                    >
                      {isSearching ? (
                        <div className="animate-spin w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
                      ) : (
                        <HiSearch size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex flex-row gap-4 items-center">
            {user && user?.accountType !== "Instructor" && (
              <Link
                to="/dashboard/cart"
                className="relative px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                onClick={() => {
                  dispatch(setProgress(100));
                }}
              >
                <div className="z-50">
                  <TiShoppingCart className="fill-gray-200 hover:fill-cyan-400 w-6 h-6 transition-colors duration-200" />
                </div>
                {totalItems > 0 && (
                  <span className="shadow-sm shadow-black text-[10px] font-bold bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full px-2 py-0.5 absolute -top-1 -right-1 min-w-[18px] text-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token == null && (
              <Link
                to="/login"
                onClick={() => {
                  dispatch(setProgress(100));
                }}
              >
                <button className="rounded-lg border border-slate-600 bg-slate-800 hover:bg-slate-700 px-4 py-2 text-gray-200 hover:text-cyan-400 font-medium transition-all duration-200 hover:border-cyan-500">
                  Login
                </button>
              </Link>
            )}
            {token == null && (
              <Link
                to="/signup"
                onClick={() => {
                  dispatch(setProgress(100));
                }}
              >
                <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-4 py-2 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                  Sign Up
                </button>
              </Link>
            )}
            {token !== null && (
              <div className="pt-1">
                <ProfileDropDown />
              </div>
            )}
          </div>

          {/* Mobile Right Side - Cart and Menu */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Cart */}
            {user && user?.accountType !== "Instructor" && (
              <Link
                to="/dashboard/cart"
                className="relative p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                onClick={() => {
                  dispatch(setProgress(100));
                }}
              >
                <TiShoppingCart className="fill-gray-200 w-6 h-6" />
                {totalItems > 0 && (
                  <span className="font-medium text-[10px] bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full px-1.5 py-0.5 absolute -top-1 -right-1 min-w-[16px] text-center shadow-lg">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={shownav}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <IoClose className="w-6 h-6 text-gray-200" />
              ) : (
                <GiHamburgerMenu className="w-6 h-6 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlay}
        className="fixed inset-0 z-40 bg-black bg-opacity-60 hidden md:hidden backdrop-blur-sm"
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        ref={show}
        className="mobNav fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw] bg-slate-900/95 backdrop-blur-md shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out md:hidden overflow-y-auto border-l border-slate-700"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800/50">
          <img src={logo} width={120} alt="E-Shiksha" />
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            <IoClose className="w-5 h-5 text-gray-200" />
          </button>
        </div>

        {/* Enhanced Mobile Search */}
        <div className="p-4 border-b border-slate-700">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                ref={mobileSearchInputRef}
                value={searchValue}
                onChange={handleSearchInputChange}
                type="text"
                placeholder="Search courses..."
                disabled={isSearching}
                className={`w-full px-4 py-3 pl-10 pr-20 bg-slate-800 border border-slate-600 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 ${
                  isSearching ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              />
              
              {/* Mobile search icon */}
              <button
                type="button"
                onClick={handleMobileSearchIconClick}
                disabled={isSearching}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                  isSearching ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                }`}
                title={searchValue.trim().length > 0 ? 'Search' : 'Focus search'}
              >
                {isSearching ? (
                  <div className="animate-spin w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
                ) : (
                  <HiSearch className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Mobile search controls */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                {searchValue && !isSearching && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="p-1 hover:bg-slate-700 rounded text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    title="Clear search"
                  >
                    <IoClose size={14} />
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={isSearching || !searchValue.trim()}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg ${
                    searchValue.trim() && !isSearching
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600'
                      : 'bg-slate-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSearching ? '...' : 'Go'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="p-4 space-y-2">
          {NavbarLinks?.map((element, index) => (
            <div key={index}>
              {element.title === "Catalog" ? (
                <div>
                  <button
                    onClick={() => setShowCatalog(!showCatalog)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-200 hover:bg-slate-800 rounded-xl transition-colors duration-200 font-medium"
                  >
                    <span>{element.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        showCatalog ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {showCatalog && (
                    <div className="ml-4 mt-2 space-y-1 max-h-60 overflow-y-auto">
                      {sublinks?.length > 0 ? (
                        sublinks.map((subElement, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/catalog/${subElement?.name}`}
                            onClick={() => {
                              dispatch(setProgress(30));
                              closeMenu();
                            }}
                            className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors duration-200 font-medium"
                          >
                            {subElement?.name}
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400 text-sm">
                          No categories available
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={element?.path}
                  onClick={() => {
                    dispatch(setProgress(100));
                    closeMenu();
                  }}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                    matchRoutes(element?.path)
                      ? "text-cyan-400 bg-slate-800 font-semibold"
                      : "text-gray-200 hover:bg-slate-800 hover:text-cyan-400"
                  }`}
                >
                  {element?.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Account Section */}
        <div className="border-t border-slate-700 p-4 mt-auto">
          {token !== null ? (
            <div className="space-y-3">
              <div className="text-gray-300 text-sm font-medium px-4">
                Account
              </div>
              <div className="px-4">
                <ProfileDropDown />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                onClick={() => {
                  dispatch(setProgress(100));
                  closeMenu();
                }}
                className="block"
              >
                <button className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-gray-200 rounded-xl font-medium hover:bg-slate-700 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-200">
                  Login
                </button>
              </Link>
              <Link
                to="/signup"
                onClick={() => {
                  dispatch(setProgress(100));
                  closeMenu();
                }}
                className="block"
              >
                <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-lg">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for mobile menu animation */}
      <style jsx>{`
        .mobNav {
          transform: translateX(100%);
        }
        
        .mobNav.navshow {
          transform: translateX(0);
        }
      `}</style>
    </>
  );
};

export default NavBar;

