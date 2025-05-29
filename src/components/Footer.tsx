import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold">MB "LITUOKLIS"</span>
            </a>
            <p className="text-white/80 mb-6">
              Suteikiame kūrėjams žinias ir išteklius nuostabių elektronikos projektų kūrimui.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Lituoklis/" className="text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
             {/* <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>*/}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Spartūs nuorodos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Pagrindinis</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-secondary transition-colors">Projektai</a></li>
              <li><a href="#about" className="text-white/80 hover:text-secondary transition-colors">Apie mus</a></li>
              {/*><a href="#tutorials" className="text-white/80 hover:text-secondary transition-colors">Pamokos</a></li>*/}         </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Susisiekite su mumis</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-1 mr-2 text-secondary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-white/80">Ozo g. 4. Vilnius, Lietuva</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mt-1 mr-2 text-secondary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-white/80">+370 62523147 </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mt-1 mr-2 text-secondary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-white/80">info@lituoklis.lt</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Naujienlaiškis</h3>
            <p className="text-white/80 mb-4">Prenumeruokite projektų idėjoms ir pamokoms</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Jūsų el. paštas" 
                className="bg-primary/50 border border-white/20 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
                aria-label="El. paštas naujienlaiškiui"
              />
              <button 
                type="submit" 
                className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90"
                aria-label="Prenumeruoti"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} LITUOKLIS. Visos teisės saugomos.
          </p>
          {/* Footer navigation links */}
       {/*  <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Taisyklės ir sąlygos</a>
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Privatumo politika</a>
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Slapukai</a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
