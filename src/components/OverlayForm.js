import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const OverlayForm = () => {
    const [overlay, setOverlay] = useState({
        contentType: 'image',
        content: '',
        imageUrl: '',
        position: 'top-left',
        size: 'small',
        dynamicOverlay: false,
        dynamicContent: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOverlay({ ...overlay, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement logic to save overlay settings (e.g., send to backend)
        console.log('Overlay Settings:', overlay);
        // Reset the form
        setOverlay({
            contentType: 'image',
            content: '',
            imageUrl: '',
            position: 'top-left',
            size: 'small',
            dynamicOverlay: false,
            dynamicContent: '',
        });
    };
    const deleteOverlay = (id) => {
        setOverlay(overlay.filter((overlay) => overlay.id !== id));
    };
    return (
        <div className='ml-6 mt-1 h-[45rem] w-[37rem]'>
            <h2 className='text-white text-5xl underline'>Overlay Settings</h2>
            <form onSubmit={handleSubmit} className='m-3'>
                <Grid container xs={12} className='flex justify-center items-center' gap={5}>
                    <Grid item xs={12} md={5} className="sm:col-span-3">
                        <label htmlFor="contentType" className="block text-sm font-medium leading-6 text-gray-100">
                            Content-Type
                        </label>
                        <div className="mt-2">
                            <select
                                id="contentType"
                                name="contentType"
                                autoComplete="contentType"
                                value={overlay.contentType}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="image">Image</option>
                                <option value="text">Text</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} className="sm:col-span-3">
                        <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-100">
                            Position
                        </label>
                        <div className="mt-2">
                            <select
                                id="position"
                                name="position"
                                autoComplete="position"
                                value={overlay.position}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="top-left">Top Left</option>
                                <option value="top-right">Top Right</option>
                            </select>
                        </div>
                    </Grid>
                    {overlay.contentType === 'text' && (
                        <Grid className="flex justify-start flex-wrap ml-6" item xs={12} md={12}>
                            <label htmlFor="content" className="block ml-9 text-sm font-medium leading-6 text-gray-100">
                                Content:
                            </label>
                            <div className="m-2">
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={3}
                                    className="block w-full ml-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={overlay.content}
                                    onChange={handleInputChange}

                                />
                            </div>

                        </Grid>
                    )}
                    {overlay.contentType === 'image' && (
                        <Grid item xs={12} className="col-span-full">
                            <label htmlFor="imageUrl" className="ml-8 block text-sm font-medium leading-6 text-gray-100">
                                Image URL:
                            </label>
                            <div className="ml-10 flex items-center gap-x-4">
                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                <input type="url" className='text-gray-900 px-2 py-1 w-full rounded-md' />
                            </div>
                        </Grid>
                    )}
                    <Grid item xs={12} md={5} className="sm:col-span-3">
                        <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-100">
                            Size:
                        </label>
                        <div className="mt-2">
                            <select
                                id="size"
                                name="size"
                                autoComplete="size"
                                value={overlay.size}
                                onChange={handleInputChange}
                                defaultValue={'Select Size'}
                                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="image">Small</option>
                                <option value="text">Medium</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-100">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </Grid>
                </Grid>
            </form>
            <hr className='bg-grey-200' />


            <div>
                <h3 className='text-white text-2xl m-3'>Overlay List</h3>
                <Grid className="h-full overflow-y-auto">
                    <ul className='text-white'>
                        {overlay.length > 0 ? (
                            [1, 1, 1].map((overlay) => (
                                <li key={overlay.id} className='text-white'>
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {overlay.content}
                                    </span> - {overlay.position} - {overlay.size}
                                    <button type="button" onClick={() => deleteOverlay(overlay.id)}>
                                        Delete
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li>
                                <p>No Items Found</p>
                            </li>
                        )}
                    </ul>
                </Grid>

            </div>
        </div>
    );
};

export default OverlayForm;
