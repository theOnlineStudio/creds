// for more information about these events check out: http://www.html5rocks.com/en/tutorials/appcache/beginner/

var appCache = window.applicationCache;

var i=0;

// Fired after the first cache of the manifest.
function handleCachedEvent(e){
	console.log ('cached!');
}
appCache.addEventListener('cached', handleCachedEvent, false);


// Checking for an update. Always the first event fired in the sequence.
function handleCheckingEvent(e) 
{
  console.log ('CACHING.');
}
appCache.addEventListener('checking', handleCheckingEvent, false);

// An update was found. The browser is fetching resources.
function handleDownloadingEvent(e) 
{
  console.log ('downloading.');
}

appCache.addEventListener('downloading', handleDownloadingEvent, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress
function handleCacheError(e) {
  //alert('Error: handleCacheError called. It is OK if this is called in OFFLINE mode. If this is called while online something is wrong.');
};

appCache.addEventListener('error', handleCacheError, false);

// Fired after the first download of the manifest.
function handleFirstDownload(e) 
{
  //alert('first Download of Manifest.');
}


appCache.addEventListener('noupdate', handleFirstDownload, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
function handleCacheError2(e) {
  //alert('Error 2: handleCacheError called. It is OK if this is called in OFFLINE mode. If this is called while online something is wrong.');
};

appCache.addEventListener('obsolete', handleCacheEvent2, false);

// Fired for each resource listed in the manifest as it is being fetched.
function handleResoruceDownload(e) 
{
i++
  console.log ('downloading item ' + i);
}

appCache.addEventListener('progress', handleResoruceDownload, false);

// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', handleCacheEvent, false);