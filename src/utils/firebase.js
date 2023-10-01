const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, listAll } = require("firebase/storage");

const firebaseConfig = {
	apiKey: "AIzaSyCobMHcAZWNHnE7YMlnWehc5vFtfZfM7fc",
	authDomain: "kspaze-2023.firebaseapp.com",
	projectId: "kspaze-2023",
	storageBucket: "kspaze-2023.appspot.com",
	messagingSenderId: "201495288484",
	appId: "1:201495288484:web:2aa0e4490d4631ae712431",
	measurementId: "G-YGRZ85FYND",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getFirestore(app);

// returns docObj {index: 4, caption: 'Soytiet Portrait Art'}
// // if no caption, returns {index: 4, caption: undefined}
// const getImgCaptions = async (folderFileName) => {
// 	const collectionRef = collection(db, folderFileName);
// 	try {
// 		const docs = await getDocs(collectionRef);
// 		let docObjList = [];

// 		docs.forEach((doc) => {
// 			const docObj = {};
// 			docObj.index = parseInt(doc.id.split(folderFileName)[1]);
// 			docObj.caption = doc.data().caption;
// 			docObjList.push(docObj);
// 		});
// 		console.log(docs[0]?.data());
// 		const sortedDocList = docObjList.sort((a, b) => a.index - b.index);
// 		const sortedCaptions = sortedDocList.map((arr) => arr.caption);

// 		return sortedCaptions;
// 	} catch (e) {
// 		console.error("Error fetching captions from database: ", e);
// 	}
// 	console.log("Done fetching captions");
// };
// ----------------------------------------------------------------

//filenameIndex => returns [index,url]
const getIndexURL = (url, folderFileName) => {
	if (url.status === "fulfilled") {
		const splitUrl = url.value.split(folderFileName);
		const index = splitUrl[splitUrl.length - 1].split(".")[0];
		const indexedURL = [parseInt(index), url.value];
		return indexedURL;
	}
};

export const getDataJson = async () => {
	// get data.json from firebase
	const dataJsonRef = ref(storage, "data.json");
	try {
		const url = await getDownloadURL(dataJsonRef);
		const response = await fetch(url);
		const dataJson = await response.json();
		console.log("Done fetching data.json");
		return dataJson;
	} catch (e) {
		console.error("Error fetching data.json from cloud: ", e);
	}
};

export const getSortedUrls = async (folderFileName) => {
	const folderRef = ref(storage, folderFileName);
	try {
		const files = await listAll(folderRef);
		const urlPromises = files.items.map(async (itemRef) => {
			const url = await getDownloadURL(itemRef);
			return url;
		});
		const urlList = await Promise.allSettled(urlPromises);
		const indexedList = urlList.map((url) => getIndexURL(url, folderFileName));
		const sortedList = indexedList.sort((a, b) => a[0] - b[0]);
		const sortedURLs = sortedList.map((arr) => {
			return { image: arr[0], src: arr[1] };
		});
		console.log(`Fetched ${sortedURLs.length} images out of ${urlList.length} images in ${folderFileName} folder`);
		return sortedURLs;
	} catch (e) {
		console.error("Error fetching image urls from cloud: ", e);
	}
	console.log("Done fetching img urls");
};

// ----------------------------------------------------------------
