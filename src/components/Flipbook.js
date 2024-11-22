import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Link, useLocation } from "react-router-dom";

const photos = [
  {
    name: "ATWCO_001.jpg",
    cid: "QmcbUjshj7RoHHLTXFMASwUTjHsKCTEVWVr4uHFLx4Du56",
    size: 2070796,
  },
  {
    name: "ATWCO_002.jpg",
    cid: "QmTcuyV5naUmqmapnYrsL9nyxM8d6uCBfAYHhxg8zgKBfr",
    size: 4768423,
  },
  {
    name: "ATWCO_003.jpg",
    cid: "QmYAbSX5yx6EA5NPYTqJSDWRqCNvZuC9uaa8ogiyTZbzJH",
    size: 2704952,
  },
  {
    name: "ATWCO_004.jpg",
    cid: "QmTzzjHoc6stWCzKrFmF15mEpK1ViMX9NDTgpUqdJcAgJr",
    size: 4789685,
  },
  {
    name: "ATWCO_005.jpg",
    cid: "QmVNdYtEWamJdYYsMeXdH99vtZeG2LmYUoQgQW12979PVj",
    size: 5577758,
  },
  {
    name: "ATWCO_006.jpg",
    cid: "QmWAWPUQCvQcEBJNKX2H7VwRdhLcVKwbQFzBE3YwcgKkc7",
    size: 2226451,
  },
  {
    name: "ATWCO_007.jpg",
    cid: "QmQTyxh4FtHcTn7WUBSaArvh19xyquN8P183vSSzE2wDRN",
    size: 6433446,
  },
  {
    name: "ATWCO_008.jpg",
    cid: "Qma8t8A6URV4xk4waSsHn51qMSmpdQM7PzkrFdKpiDv7uY",
    size: 3048987,
  },
  {
    name: "ATWCO_009.jpg",
    cid: "QmRJeriz3Gfi3M8sxHyoxqcctXhzo2kNSgJLZ87uZHdUom",
    size: 6920243,
  },
  {
    name: "ATWCO_010.jpg",
    cid: "QmVsqdXKCND4CMwFb4gqcnhNo7NPpa1SgaAqnyvbKceF2G",
    size: 4694696,
  },
  {
    name: "ATWCO_011.jpg",
    cid: "QmUFDyT1VFqgQWboY6Ab9cgRJKpPum9LynzQ55Fuiuz2Pa",
    size: 8695939,
  },
  {
    name: "ATWCO_012.jpg",
    cid: "QmPHp7d1Ks3ZK4MEDesWt4RWEg25p7HGxZCegQoCwt47bx",
    size: 3497000,
  },
  {
    name: "ATWCO_013.jpg",
    cid: "QmdUNR6o835ZxcLCpXUZ4YrZg4rK5wPySf4Th6HLKpu981",
    size: 7136083,
  },
  {
    name: "ATWCO_014.jpg",
    cid: "QmP1u81GFdeSqh6Zapxfu5pgXuAFoAAi7R2imbfdMRuaB2",
    size: 4492937,
  },
  {
    name: "ATWCO_015.jpg",
    cid: "QmUySqZKu1bvmumoKLKsBw5JXMi4dAewFnwEhU7yPzHyn8",
    size: 8620444,
  },
  {
    name: "ATWCO_016.jpg",
    cid: "QmbtFBNrMpvkhRTVLFRHEds4xCGNcCbxyMdweJUmhTqgRP",
    size: 2354684,
  },
  {
    name: "ATWCO_017.jpg",
    cid: "QmNyCK3JWSCLLHaNHYSMHyBvqc5FtRvHuPCLRGjAzCHe2s",
    size: 7389679,
  },
  {
    name: "ATWCO_018.jpg",
    cid: "QmfT7UZaAddCp639BJwKaLgtti8gafTSEiPZ4kJt6r1fAk",
    size: 6667444,
  },
  {
    name: "ATWCO_019.jpg",
    cid: "QmWaAp97GMG6LpCEK2wS69mY1mPQaMpHJLqcMX8XTAAp9H",
    size: 6856033,
  },
  {
    name: "ATWCO_020.jpg",
    cid: "QmahVBoh2ZkWEdieAZUas4PPgSTMvgK9ZzxzEfGdQdSNZz",
    size: 2700531,
  },
  {
    name: "ATWCO_021.jpg",
    cid: "QmacUpQusAdN5E85vCGpmJtkLD26NWDY3HcVCApzmtfbEb",
    size: 7682801,
  },
  {
    name: "ATWCO_022.jpg",
    cid: "QmYXtsJDktUDDtkr1k9sxVH5eyWVMGfHNkNzP6ZZGQwN1j",
    size: 2601268,
  },
  {
    name: "ATWCO_023.jpg",
    cid: "QmSQukZda22AoivL4Fx95a6NTyKYBCcfJ7gt84k8yjEcfo",
    size: 7216932,
  },
  {
    name: "ATWCO_024.jpg",
    cid: "QmWkY2hm1GEdZytio3ew7dNDguB9n4v17Ktak6fYihnYF9",
    size: 2522984,
  },
  {
    name: "ATWCO_025.jpg",
    cid: "QmfQzuAn11GzeSh77W59TXcBMbnduNusDZzXj7698194C2",
    size: 3252566,
  },
  {
    name: "ATWCO_026.jpg",
    cid: "QmdU6VpKfiuHmbLTdrJX3vJnJtSd6LeKe8pxkQLE5SXp7k",
    size: 2558665,
  },
  {
    name: "ATWCO_027.jpg",
    cid: "QmShTgmApdTjT6QjRcShLhwub1TeNvjMZFSDxeqV8RWsLM",
    size: 2540595,
  },
  {
    name: "ATWCO_028.jpg",
    cid: "QmapXp2fYcovy3nW8mC27UY1G8vnJiEhVznnz34GhbhhME",
    size: 7792567,
  },
  {
    name: "ATWCO_029.jpg",
    cid: "QmSwzu9BzTXGCppGcWBkLLMToBQG4bk8wanFNCbxdgyf8X",
    size: 7673379,
  },
  {
    name: "ATWCO_030.jpg",
    cid: "QmayT2v3LDqkbE7U8Mot3rQi9qHj2B3ZZEj49b5wDojtZ2",
    size: 6638994,
  },
  {
    name: "ATWCO_031.jpg",
    cid: "Qmd6jiPyFsLhrAkfiBoZx9LDvVodE8muZ62SoMHbWjmf3A",
    size: 9062438,
  },
  {
    name: "ATWCO_032.jpg",
    cid: "QmZVdFMJQ4MTcSKCPnj9Fni5sMXSMn2wiJjEfWVjvUm8oR",
    size: 3289334,
  },
  {
    name: "ATWCO_033.jpg",
    cid: "QmeoBrxMhDZodLz91T1tmcKPBgaqFVJ4SMab511VxTcPMH",
    size: 7478234,
  },
  {
    name: "ATWCO_034.jpg",
    cid: "QmPmC7uMRLEzYspyrxj1hFDT1wQK87kCoy3SZj4jTjWkth",
    size: 6856487,
  },
  {
    name: "ATWCO_035.jpg",
    cid: "QmdyBWktv8ufZSE8ZiPnvzDSpXW9SYUM1PgLWMm5qhv2yw",
    size: 7331274,
  },
  {
    name: "ATWCO_036.jpg",
    cid: "QmbnVbdc2NsFG7XY7TduZ3uNdAaQQh8j8nfJs6fFBw6XzX",
    size: 6830213,
  },
  {
    name: "ATWCO_037.jpg",
    cid: "QmYi6YhjsaMK6i4nNRvsyxuiv9GK7wUFyhFQCdhms8Vtts",
    size: 3931233,
  },
  {
    name: "ATWCO_038.jpg",
    cid: "Qmc57rt3wZUQ7gozV3kctQwcq3CJ1bcVzam57wYbrpN4vu",
    size: 4168578,
  },
  {
    name: "ATWCO_039.jpg",
    cid: "QmUsMQyM3JGptzWr9wZJKXZK64XxRdbTswzM3giCYRnUKb",
    size: 3151950,
  },
  {
    name: "ATWCO_040.jpg",
    cid: "QmZBtnuUZVbe66n51xxZGXGA29fFGQh3KJXx2T3GmWQGoS",
    size: 6648315,
  },
  {
    name: "ATWCO_041.jpg",
    cid: "QmNiFNA9kT6NKZ9RGyS5TecqFEKKGYRKZWNGnX3YBpgmYt",
    size: 8716614,
  },
  {
    name: "ATWCO_042.jpg",
    cid: "QmeAjt9DZZFDSH7CGseRef4GgkiVHBR9gkNBpASH8EJax2",
    size: 7226957,
  },
  {
    name: "ATWCO_043.jpg",
    cid: "QmVdz1jKiyKeYVAtV7LriofHPMJnZiNHC1mA34Bqx3yYdT",
    size: 3956193,
  },
  {
    name: "ATWCO_044.jpg",
    cid: "QmRN1Ljm6bLt9zsBhGbv4dezZyUppg6qVkH5BSKE4CcvrN",
    size: 7066594,
  },
  {
    name: "ATWCO_045.jpg",
    cid: "QmXpCp67vHcvFmYypBNP9ZqPeeYRh4e3t4jcqKMxztApUF",
    size: 5602071,
  },
  {
    name: "ATWCO_046.jpg",
    cid: "QmSDL1RMjAbvUbyJzqapQjMbzt1aFnGbquaaFMA3h16MGa",
    size: 8642518,
  },
];

const IPFS_GATEWAYS = [
  { name: "IPFS.io Gateway", url: "https://ipfs.io/ipfs/" },
  { name: "Dweb.link Gateway", url: "https://dweb.link/ipfs/" },
  { name: "Cloudflare Gateway", url: "https://cloudflare-ipfs.com/ipfs/" },
];

const Flipbook = () => {
  const location = useLocation();
  const initialGateway =
    location.state?.selectedGateway || IPFS_GATEWAYS[0].url;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [selectedGateway] = useState(initialGateway);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const loadedImages = useRef({});

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const preloadImage = () => {
      const currentCID = photos[currentIndex].cid;
      if (!loadedImages.current[currentCID]) {
        const img = new Image();
        img.src = `${selectedGateway}${currentCID}`;
        img.onload = () => {
          setIsLoading(false);
          loadedImages.current[currentCID] = true;
        };
        img.onerror = () => setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    preloadImage();
  }, [currentIndex, selectedGateway]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : photos.length - 1
    );
    setIsLoading(true);
    setScale(1);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < photos.length - 1 ? prevIndex + 1 : 0
    );
    setIsLoading(true);
    setScale(1);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "+") setScale((prev) => Math.min(prev + 0.1, 3));
      if (event.key === "-") setScale((prev) => Math.max(prev - 0.1, 0.5));
    },
    [goToPrevious, goToNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col h-screen ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
      {...handlers}
    >
      {/* Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 ${
          darkMode ? "bg-black" : "bg-white"
        } shadow-lg transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className={`${
                  darkMode ? "text-blue-400" : "text-blue-500"
                } hover:text-blue-600 transition`}
              >
                Back to Landing Page
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <header
        className={`absolute top-0 left-0 w-full ${
          darkMode ? "bg-black" : "bg-white"
        } bg-opacity-80 p-4 flex justify-between items-center z-10`}
      >
        <button
          className={`${
            darkMode ? "text-gray-200" : "text-gray-800"
          } hover:text-gray-400 transition`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold tracking-wider">
          And The World Came Outside
        </h1>
      </header>

      {/* Main Viewer */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-0">
        <div className="relative w-full max-w-5xl aspect-[3/2] shadow-lg rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-black">
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-400"></div>
            </div>
          )}
          <img
            src={`${selectedGateway}${photos[currentIndex].cid}`}
            alt={photos[currentIndex].name}
            className={`w-full h-full object-contain transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            style={{ transform: `scale(${scale})` }}
          />
          <button
            aria-label="Previous Image"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full hover:bg-gray-600 transition"
            onClick={goToPrevious}
          >
            &#8592;
          </button>
          <button
            aria-label="Next Image"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full hover:bg-gray-600 transition"
            onClick={goToNext}
          >
            &#8594;
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className={`p-4 ${darkMode ? "bg-black" : "bg-white"} shadow-md`}>
        <div className="flex items-center justify-center space-x-4 overflow-x-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.cid}
              aria-label={`Go to ${photo.name}`}
              onClick={() => {
                setCurrentIndex(index);
                setIsLoading(true);
                setScale(1);
              }}
              className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden ${
                index === currentIndex ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <img
                loading="lazy"
                src={`${selectedGateway}${photo.cid}`}
                alt={photo.name}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              />
            </button>
          ))}
        </div>
        {/* Dark Mode Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleDarkMode}
            className={`${
              darkMode ? "bg-yellow-500" : "bg-gray-800"
            } text-white px-4 py-2 rounded hover:opacity-80 transition`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Flipbook;