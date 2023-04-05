const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// BrowserSync for live reload on file saves
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: ['./'],
      directory: true,
      stream: true
    },
    // Specifiy a socket implementation of your website
    //socket: {

       // For using a socket implementation of your website,
       // configure your DNS records to point to the ip address of yourhost machine.
       // Specify the socket name next to the field 'namespace' equalto your chosen DNS record pointing
       // to you host machine. ex: 'your.dns.record'

       // namespace: "gulp.mintymint.info"
    //},
    // disable scroll, click, page refresh etc... to be disabled across all clients
    // ghostMode: true,
    port: 8080
  });
  done();
}
// BrowserSync Reload

// capabilities
function browserSyncReload(done) {
  browsersync.reload();
  done();
}
function pugProCapabilities() {
   return (
      gulp.src('views/capabilities/pug/capabilities.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProCapabilities() {
   return (
      gulp.src('views/capabilities/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/capabilities'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProCapabilities(){
   var tsResult = gulp.src('views/capabilities/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/capabilities'));
}

// error
function pugProError() {
   return (
      gulp.src('views/error/pug/error.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProError() {
   return (
      gulp.src('views/error/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/error'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProError(){
   var tsResult = gulp.src('views/error/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/error'));
}
// error

// error
function pugProContactUs() {
   return (
      gulp.src('views/contact-us/pug/contact-us.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProContactUs() {
   return (
      gulp.src('views/contact-us/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/contact-us'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProContactUs(){
   var tsResult = gulp.src('views/contact-us/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/contact-us'));
}
// contact-us

// about-us
function pugProAboutUs() {
   return (
      gulp.src('views/about-us/pug/about-us.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProAboutUs() {
   return (
      gulp.src('views/about-us/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/about-us'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProAboutUs(){
   var tsResult = gulp.src('views/about-us/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/about-us'));
}
// about-us

// home
function pugProHome() {
   return (
      gulp.src('views/home/pug/home.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProHome() {
   return (
      gulp.src('views/home/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/home'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProHome(){
   var tsResult = gulp.src('views/home/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/home'));
}
// home

// error
function pugProValueAddedServices() {
   return (
      gulp.src('views/value-added-services/pug/value-added-services.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProValueAddedServices() {
   return (
      gulp.src('views/value-added-services/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/value-added-services'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProValueAddedServices(){
   var tsResult = gulp.src('views/value-added-services/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/value-added-services'));
}
// value-added-services

// rebated-tooling-program
function pugProRebatedToolingProgram() {
   return (
      gulp.src('views/rebated-tooling-program/pug/rebated-tooling-program.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProRebatedToolingProgram() {
   return (
      gulp.src('views/rebated-tooling-program/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/error'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProRebatedToolingProgram(){
   var tsResult = gulp.src('views/rebated-tooling-program/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/rebated-tooling-program'));
}
// rebated-tooling-program

// quality-assurance
function pugProQualityAssurance() {
   return (
      gulp.src('views/quality-assurance/pug/quality-assurance.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProQualityAssurance() {
   return (
      gulp.src('views/quality-assurance/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/quality-assurance'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProQualityAssurance(){
   var tsResult = gulp.src('views/quality-assurance/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/quality-assurance'));
}
// quality-assurance

// profile-samples
function pugProProfileSamples() {
   return (
      gulp.src('views/profile-samples/pug/profile-samples.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProProfileSamples() {
   return (
      gulp.src('views/profile-samples/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/profile-samples'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProProfileSamples(){
   var tsResult = gulp.src('views/profile-samples/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/profile-samples'));
}
// profile-samples

// in-house-tooling
function pugProInHouseTooling() {
   return (
      gulp.src('views/in-house-tooling/pug/in-house-tooling.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProInHouseTooling() {
   return (
      gulp.src('views/in-house-tooling/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/in-house-tooling'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProInHouseTooling(){
   var tsResult = gulp.src('views/in-house-tooling/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/in-house-tooling'));
}
// in-house-tooling



// design-engineering-expertise
function pugProDesignEngineeringExpertise() {
   return (
      gulp.src('views/design-engineering-expertise/pug/design-engineering-expertise.pug')
      // Specifies which file will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('views'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({stream: true}))
   );
};
function sassProDesignEngineeringExpertise() {
   return (
      gulp.src('views/design-engineering-expertise/sass/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9','ff 17', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('assets/design-engineering-expertise'))
      .pipe(browsersync.reload({stream: true}))
   );
};
function tsProDesignEngineeringExpertise(){
   var tsResult = gulp.src('views/design-engineering-expertise/ts/**/*.ts') // or tsProject.src()
   .pipe(tsProject());

   return tsResult.js.pipe(gulp.dest('assets/design-engineering-expertise'));
}
// design-engineering-expertise




// tasks
tsProHome.flags = {
   '--home':'Compiles typescript to user home page for deployment'
};
tsProHome.description = 'Compile typescript to user home page';
gulp.task(tsProHome);
// tasks

// Watch files
function watchFiles() {

   //gulp.watch(['src/css/**/*.sass','src/pug/**/*.pug','src/ts/**/*.ts'], gulp.series([sassPro,pugPro,tsPro]));

   gulp.watch('views/capabilities/sass/**/*.sass',sassProCapabilities);
   gulp.watch('views/capabilities/pug/**/*.pug',pugProCapabilities);
   gulp.watch('views/capabilities/ts/**/*.ts',tsProCapabilities);

   gulp.watch('views/design-engineering-expertise/sass/**/*.sass',sassProDesignEngineeringExpertise);
   gulp.watch('views/design-engineering-expertise/pug/**/*.pug',pugProDesignEngineeringExpertise);
   gulp.watch('views/design-engineering-expertise/ts/**/*.ts',tsProDesignEngineeringExpertise);

   gulp.watch('views/error/sass/**/*.sass',sassProError);
   gulp.watch('views/error/pug/**/*.pug',pugProError);
   gulp.watch('views/error/ts/**/*.ts',tsProError);

   gulp.watch('views/home/sass/**/*.sass',sassProHome);
   gulp.watch('views/home/pug/**/*.pug',pugProHome);
   gulp.watch('views/home/ts/**/*.ts',tsProHome);
   
   gulp.watch('views/in-house-tooling/sass/**/*.sass',sassProInHouseTooling);
   gulp.watch('views/in-house-tooling/pug/**/*.pug',pugProInHouseTooling);
   gulp.watch('views/in-house-tooling/ts/**/*.ts',tsProInHouseTooling);

   gulp.watch('views/profile-samples/sass/**/*.sass',sassProProfileSamples);
   gulp.watch('views/profile-samples/pug/**/*.pug',pugProProfileSamples);
   gulp.watch('views/profile-samples/ts/**/*.ts',tsProProfileSamples);

   gulp.watch('views/quality-assurance/sass/**/*.sass',sassProQualityAssurance);
   gulp.watch('views/quality-assurance/pug/**/*.pug',pugProQualityAssurance);
   gulp.watch('views/quality-assurance/ts/**/*.ts',tsProQualityAssurance);
   
   gulp.watch('views/rebated-tooling-program/sass/**/*.sass',sassProRebatedToolingProgram);
   gulp.watch('views/rebated-tooling-program/pug/**/*.pug',pugProRebatedToolingProgram);
   gulp.watch('views/rebated-tooling-program/ts/**/*.ts',tsProRebatedToolingProgram);

   gulp.watch('views/value-added-services/sass/**/*.sass',sassProValueAddedServices);
   gulp.watch('views/value-added-services/pug/**/*.pug',pugProValueAddedServices);
   gulp.watch('views/value-added-services/ts/**/*.ts',tsProValueAddedServices);
   
   gulp.watch([
      'assets/capabilities/style.css',
      'assets/capabilities/index.js',

      'assets/design-engineering-expertise/style.css',
      'assets/design-engineering-expertise/index.js',

      'assets/error/style.css',
      'assets/error/index.js',

      'assets/home/style.css',
      'assets/home/index.js',

      'assets/in-house-tooling/style.css',
      'assets/in-house-tooling/index.js',

      'assets/profile-samples/style.css',
      'assets/profile-samples/index.js',

      'assets/quality-assurance/style.css',
      'assets/quality-assurance/index.js',

      'assets/rebated-tooling-program/style.css',
      'assets/rebated-tooling-program/index.js',

      'assets/value-added-services/style.css',
      'assets/value-added-services/index.js',

      'assets/about-us/style.css',
      'assets/about-us/index.js',

      'assets/contact-us/style.css',
      'assets/contact-us/index.js',

   ], 
   gulp.series(browserSyncReload));
};
// Watch files

// define tasks to process
const build = gulp.series(
   pugProCapabilities,
   pugProDesignEngineeringExpertise,
   pugProError,
   pugProHome,
   pugProInHouseTooling,
   pugProProfileSamples,
   pugProQualityAssurance,
   pugProRebatedToolingProgram,
   pugProValueAddedServices,
   pugProAboutUs,
   pugProContactUs,

   sassProCapabilities,
   sassProDesignEngineeringExpertise,
   sassProError,
   sassProHome,
   sassProInHouseTooling,
   sassProProfileSamples,
   sassProQualityAssurance,
   sassProRebatedToolingProgram,
   sassProValueAddedServices,
   sassProAboutUs,
   sassProContactUs,

   tsProCapabilities,
   tsProDesignEngineeringExpertise,
   tsProError,
   tsProHome,
   tsProInHouseTooling,
   tsProProfileSamples,
   tsProQualityAssurance,
   tsProRebatedToolingProgram,
   tsProValueAddedServices,
   tsProAboutUs,
   tsProContactUs,

   browserSync, 
   watchFiles
);
// define tasks to process

// export tasks
exports.default = build;